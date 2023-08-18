import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { Magic } from '@magic-sdk/admin';
import { nanoid } from 'nanoid';
import { utils } from 'ethers';
import { Request } from 'express';
import { UseGuards } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';

import { User } from 'src/entities/user/user.model';
import { UserService } from 'src/entities/user/user.service';
import { ContractsService } from 'src/services';
import { ForbiddenError, NotFoundError } from 'src/exceptions';
import { AuthGuard } from 'src/auth.guard';
import { MagicLinkNonceDto } from 'src/entities/auth/dto/magicLinkNonce.dto';
import { UserWalletType } from 'src/entities/user/user.types';
import { EmailValidationPipe } from 'src/pipes/emailValidation.pipe';
import { SocialPipe } from 'src/pipes/social.pipe';
import { AuthService } from 'src/entities/auth/auth.service';
import { getReadableNonce } from 'src/entities/auth/utils';
import { Links } from '../links/links.model';
import { SignatureDto, SmartWalletSignatureDto } from './dto/signature.dto';
import { NonceDto } from './dto/nonce.dto';

@Resolver()
export class AuthResolver {
	private readonly magicAdmin: Magic;

	constructor(
		@InjectRepository(User) private usersRepository: Repository<User>,
		@InjectRepository(Links) private linksRepository: Repository<Links>,
		private readonly userService: UserService,
		private readonly authService: AuthService,
		private configService: ConfigService
	) {
		this.magicAdmin = new Magic(this.configService.get<string>('magic.secretKey'));
	}

	@Mutation(() => String)
	async authNonce(@Args('nonceData') nonceData: NonceDto): Promise<string> {
		const { walletAddress: userWallet } = nonceData;
		const walletAddress = userWallet.toLowerCase();
		const nonce = getReadableNonce(nanoid());
		const user = await this.userService.findByWalletAddress(walletAddress);

		if (user) {
			user.nonce = nonce;
			await user.save();
		} else {
			const insertedUser = await this.usersRepository.save({ walletAddress, nonce });

			const links = await this.linksRepository.save({ entityId: insertedUser.id });

			await this.usersRepository.update({ id: insertedUser.id }, { links });
		}

		return nonce;
	}

	@Mutation(() => User)
	async authSignature(
		@Args('signatureData') signatureData: SignatureDto,
		@Context('req') context: Request
	): Promise<User> {
		const { nonce, signature, walletAddress, walletType } = signatureData;
		const signerAddress = utils.verifyMessage(nonce, signature);

		if (walletAddress.toLowerCase() !== signerAddress.toLowerCase()) {
			throw new ForbiddenError('Addresses do not match');
		}

		const user = await this.userService.findByWalletAddress(walletAddress);
		if (!user) throw new NotFoundError('No user found');
		if (user.nonce !== nonce) throw new ForbiddenError('Nonces do not match');

		if (!user.isClaimed) {
			user.isClaimed = true;
			await user.save();
		}

		if (user.walletType !== walletType) {
			user.walletType = walletType;
			await user.save();
		}

		if (context.session) {
			context.session.userId = user.id;
			context.session.walletAddr = walletAddress;
		}

		return user;
	}

	@Mutation(() => User)
	async authSmartWallet(
		@Args('smartWalletSignatureData') smartWalletSignatureData: SmartWalletSignatureDto,
		@Context('req') context: Request
	): Promise<User> {
		const { nonce, signature, walletAddress } = smartWalletSignatureData;

		const isValidSignature = await ContractsService.validateGnosisSignature(walletAddress, nonce, signature);
		if (!isValidSignature)
			throw new ForbiddenError('Signature is not valid. Make sure your wallet is connected to Polygon network');

		const user = await this.userService.findByWalletAddress(walletAddress);
		if (!user) throw new NotFoundError('No user found');
		if (user.nonce !== nonce) throw new ForbiddenError('Nonces do not match');

		if (!user.isClaimed) {
			user.isClaimed = true;
			await user.save();
		}

		if (user.walletType !== UserWalletType.SMART_WALLET) {
			user.walletType = UserWalletType.SMART_WALLET;
			await user.save();
		}

		if (context.session) {
			context.session.userId = user.id;
			context.session.walletAddr = walletAddress;
		}

		return user;
	}

	@Mutation(() => Boolean)
	validateMagicLinkToken(@Args('didToken') didToken: string) {
		try {
			this.magicAdmin.token.validate(didToken);

			return true;
		} catch (e) {
			return false;
		}
	}

	@Mutation(() => Boolean)
	async validateMagicEmail(@Args('email', new EmailValidationPipe()) email: string) {
		const userByEmail = await this.usersRepository.findOneBy({ email });

		if (userByEmail && userByEmail.walletType !== UserWalletType.MAGIC_LINK) {
			return false;
		}

		return true;
	}

	@Mutation(() => Boolean)
	async validateMagicEmailAndAddress(
		@Args('email', new EmailValidationPipe()) email: string,
		@Args('walletAddress') walletAddress: string
	) {
		const userByEmail = await this.usersRepository.findOneBy({ email });

		if (userByEmail && userByEmail.walletType !== UserWalletType.MAGIC_LINK) {
			return false;
		}

		if (userByEmail && userByEmail.walletAddress.toLowerCase() !== walletAddress.toLowerCase()) {
			return false;
		}

		return true;
	}

	@Mutation(() => String)
	async authMagicLinkNonce(
		@Args('magicLinkNonceData', new SocialPipe()) magicLinkNonceData: MagicLinkNonceDto
	): Promise<string> {
		return this.authService.authMagicLinkNonce(magicLinkNonceData);
	}

	@UseGuards(AuthGuard)
	@Mutation(() => Boolean)
	logout(@Context('req') ctx: Request) {
		ctx.session = null;
		return true;
	}
}
