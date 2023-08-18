/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MockVRFCoordinator,
  MockVRFCoordinatorInterface,
} from "../MockVRFCoordinator";

const _abi = [
  {
    inputs: [],
    name: "id",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "randomWords",
        type: "uint256[]",
      },
    ],
    name: "rawFulfillRandomWords",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "keyHash",
        type: "bytes32",
      },
      {
        internalType: "uint64",
        name: "subId",
        type: "uint64",
      },
      {
        internalType: "uint16",
        name: "minimumRequestConfirmations",
        type: "uint16",
      },
      {
        internalType: "uint32",
        name: "callbackGasLimit",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "numWords",
        type: "uint32",
      },
    ],
    name: "requestRandomWords",
    outputs: [
      {
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "requests",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506103c2806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80631fe543e3146100515780635d3b1d301461006657806381d12c581461008c578063af640d0f146100cd575b600080fd5b61006461005f3660046101a3565b6100d6565b005b610079610074366004610286565b61014e565b6040519081526020015b60405180910390f35b6100b561009a3660046102fc565b6001602052600090815260409020546001600160a01b031681565b6040516001600160a01b039091168152602001610083565b61007960005481565b60008281526001602052604090819020549051631fe543e360e01b81526001600160a01b03909116908190631fe543e3906101179086908690600401610315565b600060405180830381600087803b15801561013157600080fd5b505af1158015610145573d6000803e3d6000fd5b50505050505050565b60008054818061015d83610363565b9091555050600080548082526001602052604090912080546001600160a01b031916331790559695505050505050565b634e487b7160e01b600052604160045260246000fd5b600080604083850312156101b657600080fd5b8235915060208084013567ffffffffffffffff808211156101d657600080fd5b818601915086601f8301126101ea57600080fd5b8135818111156101fc576101fc61018d565b8060051b604051601f19603f830116810181811085821117156102215761022161018d565b60405291825284820192508381018501918983111561023f57600080fd5b938501935b8285101561025d57843584529385019392850192610244565b8096505050505050509250929050565b803563ffffffff8116811461028157600080fd5b919050565b600080600080600060a0868803121561029e57600080fd5b85359450602086013567ffffffffffffffff811681146102bd57600080fd5b9350604086013561ffff811681146102d457600080fd5b92506102e26060870161026d565b91506102f06080870161026d565b90509295509295909350565b60006020828403121561030e57600080fd5b5035919050565b6000604082018483526020604081850152818551808452606086019150828701935060005b818110156103565784518352938301939183019160010161033a565b5090979650505050505050565b600060001982141561038557634e487b7160e01b600052601160045260246000fd5b506001019056fea26469706673582212205390221ef1dcb2c2333b3f836678ccbd3fc2c25279da291db8c9b82d07947f2e64736f6c634300080c0033";

type MockVRFCoordinatorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockVRFCoordinatorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockVRFCoordinator__factory extends ContractFactory {
  constructor(...args: MockVRFCoordinatorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockVRFCoordinator> {
    return super.deploy(overrides || {}) as Promise<MockVRFCoordinator>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockVRFCoordinator {
    return super.attach(address) as MockVRFCoordinator;
  }
  connect(signer: Signer): MockVRFCoordinator__factory {
    return super.connect(signer) as MockVRFCoordinator__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockVRFCoordinatorInterface {
    return new utils.Interface(_abi) as MockVRFCoordinatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockVRFCoordinator {
    return new Contract(address, _abi, signerOrProvider) as MockVRFCoordinator;
  }
}
