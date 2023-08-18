/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IDAOConstructor,
  IDAOConstructorInterface,
} from "../IDAOConstructor";

const _abi = [
  {
    inputs: [
      {
        internalType: "enum Models.AdditionalModules[]",
        name: "",
        type: "uint8[]",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "address[]",
                name: "admins",
                type: "address[]",
              },
              {
                internalType: "address",
                name: "releaseManager",
                type: "address",
              },
              {
                internalType: "address",
                name: "creator",
                type: "address",
              },
            ],
            internalType: "struct Models.AdminSettings",
            name: "adminSettings",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "address",
                name: "openseaOwner",
                type: "address",
              },
              {
                internalType: "string",
                name: "url",
                type: "string",
              },
              {
                internalType: "string",
                name: "name",
                type: "string",
              },
              {
                internalType: "string",
                name: "symbol",
                type: "string",
              },
              {
                components: [
                  {
                    internalType: "bytes32",
                    name: "tierId",
                    type: "bytes32",
                  },
                  {
                    internalType: "string",
                    name: "attrName",
                    type: "string",
                  },
                  {
                    internalType: "bytes32",
                    name: "value",
                    type: "bytes32",
                  },
                ],
                internalType: "struct Models.Attribute[]",
                name: "attributes",
                type: "tuple[]",
              },
            ],
            internalType: "struct Models.NFTSettings",
            name: "nftSettings",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bytes32[]",
                name: "tiersValues",
                type: "bytes32[]",
              },
              {
                internalType: "uint256[]",
                name: "tiersPrices",
                type: "uint256[]",
              },
              {
                internalType: "uint64",
                name: "claimLimit",
                type: "uint64",
              },
              {
                internalType: "address",
                name: "tokenSaleAddress",
                type: "address",
              },
            ],
            internalType: "struct Models.SaleSettings",
            name: "openSaleSettings",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "bytes32[]",
                name: "tiersValues",
                type: "bytes32[]",
              },
              {
                internalType: "uint256[]",
                name: "tiersPrices",
                type: "uint256[]",
              },
              {
                internalType: "uint64",
                name: "claimLimit",
                type: "uint64",
              },
              {
                internalType: "address",
                name: "tokenSaleAddress",
                type: "address",
              },
            ],
            internalType: "struct Models.SaleSettings",
            name: "whiteListSaleSettings",
            type: "tuple",
          },
        ],
        internalType: "struct Models.DeploymentSettings",
        name: "",
        type: "tuple",
      },
      {
        internalType: "address",
        name: "treasury",
        type: "address",
      },
    ],
    name: "deploy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IDAOConstructor__factory {
  static readonly abi = _abi;
  static createInterface(): IDAOConstructorInterface {
    return new utils.Interface(_abi) as IDAOConstructorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IDAOConstructor {
    return new Contract(address, _abi, signerOrProvider) as IDAOConstructor;
  }
}
