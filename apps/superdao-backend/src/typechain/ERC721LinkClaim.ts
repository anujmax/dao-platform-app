/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface ERC721LinkClaimInterface extends utils.Interface {
  functions: {
    "CONTROLLER()": FunctionFragment;
    "__semver()": FunctionFragment;
    "claim(address,bytes32,bytes32[],bytes32)": FunctionFragment;
    "implementation()": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "isActive()": FunctionFragment;
    "isTrustedForwarder(address)": FunctionFragment;
    "kernel()": FunctionFragment;
    "linkAlreadyUsed(bytes32)": FunctionFragment;
    "merkleTreeRoot()": FunctionFragment;
    "merkleTreeURI()": FunctionFragment;
    "setActive(bool)": FunctionFragment;
    "setMerkleTree(bytes32,bytes)": FunctionFragment;
    "upgrade(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "CONTROLLER",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "__semver", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "claim",
    values: [string, BytesLike, BytesLike[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "implementation",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "initialize", values: [string]): string;
  encodeFunctionData(functionFragment: "isActive", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isTrustedForwarder",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "kernel", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "linkAlreadyUsed",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "merkleTreeRoot",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "merkleTreeURI",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "setActive", values: [boolean]): string;
  encodeFunctionData(
    functionFragment: "setMerkleTree",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "upgrade", values: [string]): string;

  decodeFunctionResult(functionFragment: "CONTROLLER", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "__semver", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "implementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isActive", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isTrustedForwarder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "kernel", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "linkAlreadyUsed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "merkleTreeRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "merkleTreeURI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setActive", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setMerkleTree",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "upgrade", data: BytesLike): Result;

  events: {
    "Init(address)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "SetActive(bool)": EventFragment;
    "Upgrade(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Init"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetActive"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Upgrade"): EventFragment;
}

export type InitEvent = TypedEvent<[string], { kernel: string }>;

export type InitEventFilter = TypedEventFilter<InitEvent>;

export type InitializedEvent = TypedEvent<[number], { version: number }>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export type SetActiveEvent = TypedEvent<[boolean], { isActive: boolean }>;

export type SetActiveEventFilter = TypedEventFilter<SetActiveEvent>;

export type UpgradeEvent = TypedEvent<[string], { code: string }>;

export type UpgradeEventFilter = TypedEventFilter<UpgradeEvent>;

export interface ERC721LinkClaim extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ERC721LinkClaimInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    CONTROLLER(overrides?: CallOverrides): Promise<[number]>;

    __semver(overrides?: CallOverrides): Promise<[string]>;

    claim(
      to: string,
      secret: BytesLike,
      merkleProof: BytesLike[],
      tierValue: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    implementation(overrides?: CallOverrides): Promise<[string]>;

    initialize(
      _kernel: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isActive(overrides?: CallOverrides): Promise<[boolean]>;

    isTrustedForwarder(
      forwarder: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    kernel(overrides?: CallOverrides): Promise<[string]>;

    linkAlreadyUsed(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    merkleTreeRoot(overrides?: CallOverrides): Promise<[string]>;

    merkleTreeURI(overrides?: CallOverrides): Promise<[string]>;

    setActive(
      isActive_: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMerkleTree(
      merkleTreeRoot_: BytesLike,
      merkleTreeURI_: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    upgrade(
      appCode: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  CONTROLLER(overrides?: CallOverrides): Promise<number>;

  __semver(overrides?: CallOverrides): Promise<string>;

  claim(
    to: string,
    secret: BytesLike,
    merkleProof: BytesLike[],
    tierValue: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  implementation(overrides?: CallOverrides): Promise<string>;

  initialize(
    _kernel: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isActive(overrides?: CallOverrides): Promise<boolean>;

  isTrustedForwarder(
    forwarder: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  kernel(overrides?: CallOverrides): Promise<string>;

  linkAlreadyUsed(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  merkleTreeRoot(overrides?: CallOverrides): Promise<string>;

  merkleTreeURI(overrides?: CallOverrides): Promise<string>;

  setActive(
    isActive_: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMerkleTree(
    merkleTreeRoot_: BytesLike,
    merkleTreeURI_: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  upgrade(
    appCode: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    CONTROLLER(overrides?: CallOverrides): Promise<number>;

    __semver(overrides?: CallOverrides): Promise<string>;

    claim(
      to: string,
      secret: BytesLike,
      merkleProof: BytesLike[],
      tierValue: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    implementation(overrides?: CallOverrides): Promise<string>;

    initialize(_kernel: string, overrides?: CallOverrides): Promise<void>;

    isActive(overrides?: CallOverrides): Promise<boolean>;

    isTrustedForwarder(
      forwarder: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    kernel(overrides?: CallOverrides): Promise<string>;

    linkAlreadyUsed(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    merkleTreeRoot(overrides?: CallOverrides): Promise<string>;

    merkleTreeURI(overrides?: CallOverrides): Promise<string>;

    setActive(isActive_: boolean, overrides?: CallOverrides): Promise<void>;

    setMerkleTree(
      merkleTreeRoot_: BytesLike,
      merkleTreeURI_: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    upgrade(appCode: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "Init(address)"(kernel?: null): InitEventFilter;
    Init(kernel?: null): InitEventFilter;

    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "SetActive(bool)"(isActive?: null): SetActiveEventFilter;
    SetActive(isActive?: null): SetActiveEventFilter;

    "Upgrade(address)"(code?: null): UpgradeEventFilter;
    Upgrade(code?: null): UpgradeEventFilter;
  };

  estimateGas: {
    CONTROLLER(overrides?: CallOverrides): Promise<BigNumber>;

    __semver(overrides?: CallOverrides): Promise<BigNumber>;

    claim(
      to: string,
      secret: BytesLike,
      merkleProof: BytesLike[],
      tierValue: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    implementation(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _kernel: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isActive(overrides?: CallOverrides): Promise<BigNumber>;

    isTrustedForwarder(
      forwarder: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    kernel(overrides?: CallOverrides): Promise<BigNumber>;

    linkAlreadyUsed(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    merkleTreeRoot(overrides?: CallOverrides): Promise<BigNumber>;

    merkleTreeURI(overrides?: CallOverrides): Promise<BigNumber>;

    setActive(
      isActive_: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMerkleTree(
      merkleTreeRoot_: BytesLike,
      merkleTreeURI_: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    upgrade(
      appCode: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    CONTROLLER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    __semver(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    claim(
      to: string,
      secret: BytesLike,
      merkleProof: BytesLike[],
      tierValue: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    implementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _kernel: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isActive(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isTrustedForwarder(
      forwarder: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    kernel(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    linkAlreadyUsed(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    merkleTreeRoot(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    merkleTreeURI(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setActive(
      isActive_: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMerkleTree(
      merkleTreeRoot_: BytesLike,
      merkleTreeURI_: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    upgrade(
      appCode: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
