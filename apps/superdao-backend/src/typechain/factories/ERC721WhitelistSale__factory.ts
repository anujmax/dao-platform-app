/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC721WhitelistSale,
  ERC721WhitelistSaleInterface,
} from "../ERC721WhitelistSale";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "trustedForwarder",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IKernel",
        name: "kernel",
        type: "address",
      },
    ],
    name: "Init",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "appAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "tierValue",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "cost",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "buyToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "saleType",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "semver",
        type: "string",
      },
    ],
    name: "OnBuy",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "isActive",
        type: "bool",
      },
    ],
    name: "SetActive",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "claimLimit",
        type: "uint64",
      },
    ],
    name: "SetClaimLimit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32[]",
        name: "tierValues",
        type: "bytes32[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "tierPrices_",
        type: "uint256[]",
      },
    ],
    name: "SetPaymentPolicy",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "salesController",
        type: "address",
      },
    ],
    name: "SetSalesController",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32[]",
        name: "tiers",
        type: "bytes32[]",
      },
      {
        indexed: false,
        internalType: "bool[]",
        name: "active",
        type: "bool[]",
      },
    ],
    name: "SetTiersActive",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "start",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "end",
        type: "uint256",
      },
    ],
    name: "SetTimeOfSale",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "code",
        type: "address",
      },
    ],
    name: "Upgrade",
    type: "event",
  },
  {
    inputs: [],
    name: "__semver",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "proof",
        type: "bytes32[]",
      },
      {
        internalType: "bytes32",
        name: "tierValue",
        type: "bytes32",
      },
    ],
    name: "buy",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "proof",
        type: "bytes32[]",
      },
      {
        internalType: "bytes32",
        name: "tierValue",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "walletLimit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "walletPrice",
        type: "uint256",
      },
    ],
    name: "buyWithLimits",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "claimLimit",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "claims",
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
        internalType: "bytes32",
        name: "tierValue",
        type: "bytes32",
      },
    ],
    name: "getLeftClaimsForTier",
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
        internalType: "address",
        name: "wallet",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "tierValue",
        type: "bytes32",
      },
    ],
    name: "getLeftClaimsForWallet",
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
    inputs: [],
    name: "getSales",
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
  {
    inputs: [],
    name: "getTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
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
    inputs: [],
    name: "implementation",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "_kernel",
        type: "address",
      },
      {
        internalType: "address",
        name: "_salesController",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_options",
        type: "bytes",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "isActive",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "forwarder",
        type: "address",
      },
    ],
    name: "isTrustedForwarder",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "kernel",
    outputs: [
      {
        internalType: "contract IKernel",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "merkleProofIpfsHash",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "isActive_",
        type: "bool",
      },
    ],
    name: "setActive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "claimLimit_",
        type: "uint64",
      },
    ],
    name: "setClaimLimit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "merkleRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "merkleProofIpfsHash_",
        type: "bytes",
      },
    ],
    name: "setMerkleTree",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "tierValues",
        type: "bytes32[]",
      },
      {
        internalType: "uint256[]",
        name: "tierPrices_",
        type: "uint256[]",
      },
    ],
    name: "setPaymentPolicy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newSales",
        type: "address",
      },
    ],
    name: "setSalesController",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "tierValues",
        type: "bytes32[]",
      },
      {
        internalType: "uint256[]",
        name: "tierLimits",
        type: "uint256[]",
      },
    ],
    name: "setTierPerWalletLimits",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "tierValues",
        type: "bytes32[]",
      },
      {
        internalType: "bool[]",
        name: "activity",
        type: "bool[]",
      },
    ],
    name: "setTiersActive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "start_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "end_",
        type: "uint256",
      },
    ],
    name: "setTimeOfSale",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "totalClaims",
        type: "uint64",
      },
    ],
    name: "setTotalClaimsLimits",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "tierPerWalletClaimed",
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
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "tierPerWalletLimit",
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
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "tierPrices",
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
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "tiersActive",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalClaimed",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalClaimsLimit",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "appCode",
        type: "address",
      },
    ],
    name: "upgrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6101006040526064805460ff60b01b191690553480156200001f57600080fd5b5060405162002f4e38038062002f4e833981016040819052620000429162000063565b6001600160a01b0316608052600160a0819052600060c05260e05262000095565b6000602082840312156200007657600080fd5b81516001600160a01b03811681146200008e57600080fd5b9392505050565b60805160a05160c05160e051612e78620000d660003960006111e4015260006111b90152600061118e0152600081816103ed0152611c350152612e786000f3fe6080604052600436106101d85760003560e01c80636e13e43011610102578063c0c6d00e11610095578063d4aae0c411610064578063d4aae0c4146105f3578063d54ad2a114610619578063f8f1fc3014610640578063fdd487a81461065557600080fd5b8063c0c6d00e14610566578063c1f875a114610586578063c6788bdd146105a6578063cf7a1d77146105d357600080fd5b8063ae4a40d5116100d1578063ae4a40d5146104e1578063b00f24cf146104f4578063b922854f14610514578063be6106761461054157600080fd5b80636e13e430146104525780637c56b0711461047f5780637effd8a71461049f578063acec338a146104c157600080fd5b80632eb927691161017a578063557ed1ba11610149578063557ed1ba146103a8578063572b6c05146103d05780635c60da1b1461041d5780636cd5872d1461043257600080fd5b80632eb92769146102e35780633520bce01461031157806340f19677146103495780634135d7d71461038857600080fd5b80630f1806a0116101b65780630f1806a01461025657806322f3e2d41461029657806323ebfe28146102b05780632b2a8594146102d057600080fd5b80630900f010146101dd5780630d83304c146101ff5780630f140eda14610236575b600080fd5b3480156101e957600080fd5b506101fd6101f8366004612458565b610675565b005b34801561020b57600080fd5b5060cd546001600160a01b03165b6040516001600160a01b0390911681526020015b60405180910390f35b34801561024257600080fd5b506101fd61025136600461247c565b610743565b34801561026257600080fd5b5061028661027136600461249e565b60d06020526000908152604090205460ff1681565b604051901515815260200161022d565b3480156102a257600080fd5b5060c9546102869060ff1681565b3480156102bc57600080fd5b506101fd6102cb3660046125b4565b6107ee565b6101fd6102de366004612662565b610903565b3480156102ef57600080fd5b506103036102fe36600461249e565b610cbb565b60405190815260200161022d565b34801561031d57600080fd5b5061030361032c3660046126bb565b60cc60209081526000928352604080842090915290825290205481565b34801561035557600080fd5b5060c95461037090600160481b90046001600160401b031681565b6040516001600160401b03909116815260200161022d565b34801561039457600080fd5b506101fd6103a33660046126fe565b610fac565b3480156103b457600080fd5b5060ce5460cf546040805192835260208301919091520161022d565b3480156103dc57600080fd5b506102866103eb366004612458565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0390811691161490565b34801561042957600080fd5b50610219611042565b34801561043e57600080fd5b506101fd61044d3660046126fe565b61105b565b34801561045e57600080fd5b5061030361046d36600461249e565b60c86020526000908152604090205481565b34801561048b57600080fd5b506101fd61049a366004612458565b611118565b3480156104ab57600080fd5b506104b4611187565b60405161022d9190612766565b3480156104cd57600080fd5b506101fd6104dc366004612789565b611269565b6101fd6104ef3660046127a4565b611313565b34801561050057600080fd5b506101fd61050f36600461285e565b6116ca565b34801561052057600080fd5b5061030361052f36600461249e565b60cb6020526000908152604090205481565b34801561054d57600080fd5b5060c9546103709061010090046001600160401b031681565b34801561057257600080fd5b506101fd6105813660046125b4565b61173b565b34801561059257600080fd5b506101fd6105a13660046128fc565b61187d565b3480156105b257600080fd5b506103036105c1366004612458565b60ca6020526000908152604090205481565b3480156105df57600080fd5b506101fd6105ee366004612955565b6119d4565b3480156105ff57600080fd5b50606454610219906201000090046001600160a01b031681565b34801561062557600080fd5b5060c95461037090600160881b90046001600160401b031681565b34801561064c57600080fd5b506104b4611aea565b34801561066157600080fd5b506103036106703660046126bb565b611b79565b6064546201000090046001600160a01b031661068f611c31565b6001600160a01b0316146040518060400160405280600d81526020016c20aaaa2427a924ad20aa24a7a760991b815250906106e65760405162461bcd60e51b81526004016106dd9190612766565b60405180910390fd5b50806106f0611c7b565b80546001600160a01b0319166001600160a01b0392831617905560405190821681527ff78721226efe9a1bb678189a16d1554928b9f2192e2cb93eeda83b79fa40007d906020015b60405180910390a150565b60cd546001600160a01b0316610757611c31565b6001600160a01b0316146040518060400160405280600d81526020016c20aaaa2427a924ad20aa24a7a760991b815250906107a55760405162461bcd60e51b81526004016106dd9190612766565b5060ce82905560cf81905560408051838152602081018390527f19903fcd4f0f6aaf96aadb26eba3e07458243991d7eca9041fd4aaaab519096091015b60405180910390a15050565b60cd546001600160a01b0316610802611c31565b6001600160a01b0316146040518060400160405280600d81526020016c20aaaa2427a924ad20aa24a7a760991b815250906108505760405162461bcd60e51b81526004016106dd9190612766565b5080518251146040518060400160405280600a8152602001692b20a624a220aa24a7a760b11b815250906108975760405162461bcd60e51b81526004016106dd9190612766565b5060005b825181146108fe578181815181106108b5576108b56129e6565b602002602001015160cb60008584815181106108d3576108d36129e6565b6020026020010151815260200190815260200160002081905550806108f790612a12565b905061089b565b505050565b61012d5460408051808201909152600e81526d24a724aa24a0a624ad20aa24a7a760911b60208201529061094a5760405162461bcd60e51b81526004016106dd9190612766565b5060008161096657600084815260c86020526040902054610968565b815b905080158015906109795750803410155b6040518060400160405280600a8152602001692b20a624a220aa24a7a760b11b815250906109ba5760405162461bcd60e51b81526004016106dd9190612766565b5060c95460408051808201909152600b81526a554e415641494c41424c4560a81b60208201529060ff16610a015760405162461bcd60e51b81526004016106dd9190612766565b508215610a8b5760cc6000610a14611c31565b6001600160a01b03166001600160a01b0316815260200190815260200160002060008581526020019081526020016000205483116040518060400160405280600a8152602001692b20a624a220aa24a7a760b11b81525090610a895760405162461bcd60e51b81526004016106dd9190612766565b505b6000610b0f8787808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152505061012d549150610ad19050611c31565b604051602001610af4919060609190911b6001600160601b031916815260140190565b60405160208183030381529060405280519060200120611cae565b905080610bd257610b8f8787808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152505061012d549150610b5a9050611c31565b60405160609190911b6001600160601b0319166020820152603481018990526054810188905260748101879052609401610af4565b6040518060400160405280600a8152602001692b20a624a220aa24a7a760b11b81525090610bd05760405162461bcd60e51b81526004016106dd9190612766565b505b610bdb85611cc4565b610be3611f46565b60cd546000906001600160a01b0316632cfd3005610bff611c31565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602481018990526044016020604051808303816000875af1158015610c4c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c709190612a2d565b9050610cb1610c7d611c31565b82888660006040518060400160405280600981526020016815da1a5d195b1a5cdd60ba1b815250610cac611187565b61201c565b5050505050505050565b6064546040516545524337323160d01b60208201526000916000199183916201000090046001600160a01b03169063dae3f63490602601604051602081830303815290604052805190602001206040518263ffffffff1660e01b8152600401610d2691815260200190565b602060405180830381865afa158015610d43573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d679190612a2d565b60c954909150600160481b90046001600160401b031615610dfa5760c9546001600160401b03600160881b82048116600160481b909204161115610df05760c954600090610dce906001600160401b03600160881b8204811691600160481b900416612a4a565b6001600160401b03169050828110610de65782610de8565b805b925050610dfa565b5060009392505050565b6000816001600160a01b03166390d3786e604051806040016040528060048152602001632a24a2a960e11b815250876040518060400160405280600a81526020016913505617d05353d5539560b21b8152506040518463ffffffff1660e01b8152600401610e6a93929190612a72565b602060405180830381865afa158015610e87573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610eab9190612aa7565b90508015610fa3576000826001600160a01b03166390d3786e604051806040016040528060048152602001632a24a2a960e11b815250886040518060400160405280600c81526020016b1513d5105317d05353d5539560a21b8152506040518463ffffffff1660e01b8152600401610f2593929190612a72565b602060405180830381865afa158015610f42573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f669190612aa7565b905080821115610f95576000610f7c8284612ac0565b9050848110610f8b5784610f8d565b805b945050610fa1565b50600095945050505050565b505b50909392505050565b60cd546001600160a01b0316610fc0611c31565b6001600160a01b0316146040518060400160405280600d81526020016c20aaaa2427a924ad20aa24a7a760991b8152509061100e5760405162461bcd60e51b81526004016106dd9190612766565b5060c980546001600160401b03909216600160481b0270ffffffffffffffff00000000000000000019909216919091179055565b600061104c611c7b565b546001600160a01b0316919050565b60cd546001600160a01b031661106f611c31565b6001600160a01b0316146040518060400160405280600d81526020016c20aaaa2427a924ad20aa24a7a760991b815250906110bd5760405162461bcd60e51b81526004016106dd9190612766565b5060c9805468ffffffffffffffff0019166101006001600160401b038481168202929092179283905560405192041681527f335a8b69e4bc3ebd56c1294128e1c5ddedf4a0349dbd56fb3bfc4d6b156deb6d90602001610738565b60cd546001600160a01b031661112c611c31565b6001600160a01b0316146040518060400160405280600d81526020016c20aaaa2427a924ad20aa24a7a760991b8152509061117a5760405162461bcd60e51b81526004016106dd9190612766565b5061118481612068565b50565b60606111b47f00000000000000000000000000000000000000000000000000000000000000006030612ad7565b6111df7f00000000000000000000000000000000000000000000000000000000000000006030612ad7565b61120a7f00000000000000000000000000000000000000000000000000000000000000006030612ad7565b604051603b60f91b60208201526001600160f81b031960f894851b81166021830152601760f91b6022830181905293851b811660238301526024820193909352921b166025820152602601604051602081830303815290604052905090565b60cd546001600160a01b031661127d611c31565b6001600160a01b0316146040518060400160405280600d81526020016c20aaaa2427a924ad20aa24a7a760991b815250906112cb5760405162461bcd60e51b81526004016106dd9190612766565b5060c9805460ff191682151590811790915560405160ff909116151581527f739f22248654acf37bf505bd0621ca0239455fd8f43d16c0491010148ca68f9790602001610738565b60ce54151580611324575060cf5415155b6040518060400160405280600f81526020016e29a0a622afaa24a6a2afa2a92927a960891b8152509061136a5760405162461bcd60e51b81526004016106dd9190612766565b5060ce544210158061137c575060ce54155b8015611394575060cf5442111580611394575060cf54155b6040518060400160405280600f81526020016e29a0a622afaa24a6a2afa2a92927a960891b815250906113da5760405162461bcd60e51b81526004016106dd9190612766565b5061012d5460408051808201909152600e81526d24a724aa24a0a624ad20aa24a7a760911b6020820152906114225760405162461bcd60e51b81526004016106dd9190612766565b50600060c86000838152602001908152602001600020549050803410156040518060400160405280600a8152602001692b20a624a220aa24a7a760b11b815250906114805760405162461bcd60e51b81526004016106dd9190612766565b5060c95460ff1680156114a15750600082815260d0602052604090205460ff165b6040518060400160405280600b81526020016a554e415641494c41424c4560a81b815250906114e35760405162461bcd60e51b81526004016106dd9190612766565b50600061152a8585808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152505061012d549150610ad19050611c31565b9050806115e25761159f8585808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152505061012d5491506115759050611c31565b86604051602001610af492919060609290921b6001600160601b0319168252601482015260340190565b6040518060400160405280600a8152602001692b20a624a220aa24a7a760b11b815250906115e05760405162461bcd60e51b81526004016106dd9190612766565b505b81156115f0576115f0611f46565b6115f983611cc4565b60cd546000906001600160a01b0316632cfd3005611615611c31565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602481018790526044016020604051808303816000875af1158015611662573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116869190612a2d565b90506116c2611693611c31565b82868660006040518060400160405280600981526020016815da1a5d195b1a5cdd60ba1b815250610cac611187565b505050505050565b60cd546001600160a01b03166116de611c31565b6001600160a01b0316146040518060400160405280600d81526020016c20aaaa2427a924ad20aa24a7a760991b8152509061172c5760405162461bcd60e51b81526004016106dd9190612766565b5061173782826120b6565b5050565b60cd546001600160a01b031661174f611c31565b6001600160a01b0316146040518060400160405280600d81526020016c20aaaa2427a924ad20aa24a7a760991b8152509061179d5760405162461bcd60e51b81526004016106dd9190612766565b5080518251146040518060400160405280600a8152602001692b20a624a220aa24a7a760b11b815250906117e45760405162461bcd60e51b81526004016106dd9190612766565b5060005b8251811461184b57818181518110611802576118026129e6565b602002602001015160c86000858481518110611820576118206129e6565b60200260200101518152602001908152602001600020819055508061184490612a12565b90506117e8565b507fb983419af342763d5a20324a9f5f57c5fced27c5a08d08b398c0f79ee161c06f82826040516107e2929190612b37565b60cd546001600160a01b0316611891611c31565b6001600160a01b0316146040518060400160405280600d81526020016c20aaaa2427a924ad20aa24a7a760991b815250906118df5760405162461bcd60e51b81526004016106dd9190612766565b5080518251146040518060400160405280600a8152602001692b20a624a220aa24a7a760b11b815250906119265760405162461bcd60e51b81526004016106dd9190612766565b5060005b825181146119a257818181518110611944576119446129e6565b602002602001015160d06000858481518110611962576119626129e6565b6020026020010151815260200190815260200160002060006101000a81548160ff021916908315150217905550808061199a90612a12565b91505061192a565b507f72699bc8e54b0633ef1a97c0388f6fc7c05e5c4046ccaa4e83fab0ba03cc772082826040516107e2929190612b8e565b60006119e060016120d0565b905080156119f8576064805461ff0019166101001790555b611a018561215f565b6000611a0f83850185612bda565b9050611a1a85612068565b611a278160800151611269565b8051611a329061105b565b611a3f8160200151610fac565b611a528160e0015182610100015161173b565b611a6481604001518260600151610743565b611a778160e001518261012001516107ee565b611a898160a001518260c001516120b6565b611a9c8160e0015182610140015161187d565b508015611ae3576064805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5050505050565b61012c8054611af890612d30565b80601f0160208091040260200160405190810160405280929190818152602001828054611b2490612d30565b8015611b715780601f10611b4657610100808354040283529160200191611b71565b820191906000526020600020905b815481529060010190602001808311611b5457829003601f168201915b505050505081565b600080611b8583610cbb565b600084815260cb60205260409020549091508015611c29576001600160a01b038516600090815260cc60209081526040808320878452825291829020548251808401909352600b83526a554e415641494c41424c4560a81b918301919091529081831015611c065760405162461bcd60e51b81526004016106dd9190612766565b506000611c138284612ac0565b9050838110611c225783611c24565b805b935050505b509392505050565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316331415611c71575060131936013560601c90565b503390565b905090565b6000611c76611cab60017f797d7c7d0df25d67e029b044c5bcb2b89d68f6483382b5f85e64485950ed88d1612ac0565b90565b600082611cbb8584612225565b14949350505050565b60c954600160481b90046001600160401b031615611d855760c95460408051808201909152600f81526e212aacafa624a6a4aa2fa2a92927a960891b6020820152906001600160401b03600160881b82048116600160481b9092041611611d3e5760405162461bcd60e51b81526004016106dd9190612766565b5060c98054600160881b90046001600160401b0316906011611d5f83612d6b565b91906101000a8154816001600160401b0302191690836001600160401b03160217905550505b60c95461010090046001600160401b031615611e305760ca6000611da7611c31565b6001600160a01b03166001600160a01b031681526020019081526020016000205460c960019054906101000a90046001600160401b03166001600160401b0316116040518060400160405280600f81526020016e212aacafa624a6a4aa2fa2a92927a960891b81525090611e2e5760405162461bcd60e51b81526004016106dd9190612766565b505b600081815260cb602052604090205415611f0b5760cc6000611e50611c31565b6001600160a01b031681526020808201929092526040908101600090812084825283528181205460cb845290829020548251808401909352600f83526e212aacafa624a6a4aa2fa2a92927a960891b93830193909352909111611ec65760405162461bcd60e51b81526004016106dd9190612766565b5060cc6000611ed3611c31565b6001600160a01b03168152602080820192909252604090810160009081208482529092528120805491611f0583612a12565b91905055505b60ca6000611f17611c31565b6001600160a01b0316815260208101919091526040016000908120805491611f3e83612a12565b919050555050565b60cd5460408051631d8cf42560e11b815290516000926001600160a01b031691633b19e84a9160048083019260209291908290030181865afa158015611f90573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611fb49190612a2d565b6040805180820190915260138152724e4f5f54524541535552595f4144445245535360681b60208201529091506001600160a01b0382166120085760405162461bcd60e51b81526004016106dd9190612766565b506111846001600160a01b03821634612291565b7ffd039b5cdcca16322f128fa1acbd38806268c1efe2d12cb75cfdfe19d7beacb7878787878787876040516120579796959493929190612d92565b60405180910390a150505050505050565b60cd80546001600160a01b0319166001600160a01b0383169081179091556040519081527f895bcfa5c3fb01f52243cbdb8803be50d429f2198e363bf1a9f578b4fba0629790602001610738565b61012d82905580516108fe9061012c9060208401906123aa565b606454600090610100900460ff1615612119578160ff1660011480156120f55750303b155b6121115760405162461bcd60e51b81526004016106dd90612df4565b506000919050565b60645460ff8084169116106121405760405162461bcd60e51b81526004016106dd90612df4565b506064805460ff191660ff92909216919091179055600190565b919050565b606454610100900460ff166121ca5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b60648201526084016106dd565b6064805462010000600160b01b031916620100006001600160a01b038481168202929092179283905560405192041681527f4f8cfde3439a1a302c21ca51eec26086efbfd940b8c0279889fc6bb6e73ecc6690602001610738565b600081815b8451811015611c29576000858281518110612247576122476129e6565b6020026020010151905080831161226d576000838152602082905260409020925061227e565b600081815260208490526040902092505b508061228981612a12565b91505061222a565b804710156122e15760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e636500000060448201526064016106dd565b6000826001600160a01b03168260405160006040518083038185875af1925050503d806000811461232e576040519150601f19603f3d011682016040523d82523d6000602084013e612333565b606091505b50509050806108fe5760405162461bcd60e51b815260206004820152603a60248201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260448201527f6563697069656e74206d6179206861766520726576657274656400000000000060648201526084016106dd565b8280546123b690612d30565b90600052602060002090601f0160209004810192826123d8576000855561241e565b82601f106123f157805160ff191683800117855561241e565b8280016001018555821561241e579182015b8281111561241e578251825591602001919060010190612403565b5061242a92915061242e565b5090565b5b8082111561242a576000815560010161242f565b6001600160a01b038116811461118457600080fd5b60006020828403121561246a57600080fd5b813561247581612443565b9392505050565b6000806040838503121561248f57600080fd5b50508035926020909101359150565b6000602082840312156124b057600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b60405161016081016001600160401b03811182821017156124f0576124f06124b7565b60405290565b604051601f8201601f191681016001600160401b038111828210171561251e5761251e6124b7565b604052919050565b60006001600160401b0382111561253f5761253f6124b7565b5060051b60200190565b600082601f83011261255a57600080fd5b8135602061256f61256a83612526565b6124f6565b82815260059290921b8401810191818101908684111561258e57600080fd5b8286015b848110156125a95780358352918301918301612592565b509695505050505050565b600080604083850312156125c757600080fd5b82356001600160401b03808211156125de57600080fd5b6125ea86838701612549565b9350602085013591508082111561260057600080fd5b5061260d85828601612549565b9150509250929050565b60008083601f84011261262957600080fd5b5081356001600160401b0381111561264057600080fd5b6020830191508360208260051b850101111561265b57600080fd5b9250929050565b60008060008060006080868803121561267a57600080fd5b85356001600160401b0381111561269057600080fd5b61269c88828901612617565b9099909850602088013597604081013597506060013595509350505050565b600080604083850312156126ce57600080fd5b82356126d981612443565b946020939093013593505050565b80356001600160401b038116811461215a57600080fd5b60006020828403121561271057600080fd5b612475826126e7565b6000815180845260005b8181101561273f57602081850181015186830182015201612723565b81811115612751576000602083870101525b50601f01601f19169290920160200192915050565b6020815260006124756020830184612719565b8035801515811461215a57600080fd5b60006020828403121561279b57600080fd5b61247582612779565b6000806000604084860312156127b957600080fd5b83356001600160401b038111156127cf57600080fd5b6127db86828701612617565b909790965060209590950135949350505050565b600082601f83011261280057600080fd5b81356001600160401b03811115612819576128196124b7565b61282c601f8201601f19166020016124f6565b81815284602083860101111561284157600080fd5b816020850160208301376000918101602001919091529392505050565b6000806040838503121561287157600080fd5b8235915060208301356001600160401b0381111561288e57600080fd5b61260d858286016127ef565b600082601f8301126128ab57600080fd5b813560206128bb61256a83612526565b82815260059290921b840181019181810190868411156128da57600080fd5b8286015b848110156125a9576128ef81612779565b83529183019183016128de565b6000806040838503121561290f57600080fd5b82356001600160401b038082111561292657600080fd5b61293286838701612549565b9350602085013591508082111561294857600080fd5b5061260d8582860161289a565b6000806000806060858703121561296b57600080fd5b843561297681612443565b9350602085013561298681612443565b925060408501356001600160401b03808211156129a257600080fd5b818701915087601f8301126129b657600080fd5b8135818111156129c557600080fd5b8860208285010111156129d757600080fd5b95989497505060200194505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000600019821415612a2657612a266129fc565b5060010190565b600060208284031215612a3f57600080fd5b815161247581612443565b60006001600160401b0383811690831681811015612a6a57612a6a6129fc565b039392505050565b606081526000612a856060830186612719565b8460208401528281036040840152612a9d8185612719565b9695505050505050565b600060208284031215612ab957600080fd5b5051919050565b600082821015612ad257612ad26129fc565b500390565b600060ff821660ff84168060ff03821115612af457612af46129fc565b019392505050565b600081518084526020808501945080840160005b83811015612b2c57815187529582019590820190600101612b10565b509495945050505050565b604081526000612b4a6040830185612afc565b82810360208481019190915284518083528582019282019060005b81811015612b8157845183529383019391830191600101612b65565b5090979650505050505050565b604081526000612ba16040830185612afc565b82810360208481019190915284518083528582019282019060005b81811015612b81578451151583529383019391830191600101612bbc565b600060208284031215612bec57600080fd5b81356001600160401b0380821115612c0357600080fd5b908301906101608286031215612c1857600080fd5b612c206124cd565b612c29836126e7565b8152612c37602084016126e7565b60208201526040830135604082015260608301356060820152612c5c60808401612779565b608082015260a083013560a082015260c083013582811115612c7d57600080fd5b612c89878286016127ef565b60c08301525060e083013582811115612ca157600080fd5b612cad87828601612549565b60e0830152506101008084013583811115612cc757600080fd5b612cd388828701612549565b8284015250506101208084013583811115612ced57600080fd5b612cf988828701612549565b8284015250506101408084013583811115612d1357600080fd5b612d1f8882870161289a565b918301919091525095945050505050565b600181811c90821680612d4457607f821691505b60208210811415612d6557634e487b7160e01b600052602260045260246000fd5b50919050565b60006001600160401b0380831681811415612d8857612d886129fc565b6001019392505050565b6001600160a01b038881168252878116602083015260408201879052606082018690528416608082015260e060a08201819052600090612dd490830185612719565b82810360c0840152612de68185612719565b9a9950505050505050505050565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b60608201526080019056fea264697066735822122049cefc64e8f7e5680182c0b02a0f04a652e6433435cb763168f3e41134cafd8b64736f6c634300080c0033";

type ERC721WhitelistSaleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721WhitelistSaleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721WhitelistSale__factory extends ContractFactory {
  constructor(...args: ERC721WhitelistSaleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    trustedForwarder: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC721WhitelistSale> {
    return super.deploy(
      trustedForwarder,
      overrides || {}
    ) as Promise<ERC721WhitelistSale>;
  }
  getDeployTransaction(
    trustedForwarder: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(trustedForwarder, overrides || {});
  }
  attach(address: string): ERC721WhitelistSale {
    return super.attach(address) as ERC721WhitelistSale;
  }
  connect(signer: Signer): ERC721WhitelistSale__factory {
    return super.connect(signer) as ERC721WhitelistSale__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721WhitelistSaleInterface {
    return new utils.Interface(_abi) as ERC721WhitelistSaleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721WhitelistSale {
    return new Contract(address, _abi, signerOrProvider) as ERC721WhitelistSale;
  }
}
