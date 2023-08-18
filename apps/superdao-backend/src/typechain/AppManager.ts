/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
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

export interface AppManagerInterface extends utils.Interface {
  functions: {
    "KERNEL_ADMIN()": FunctionFragment;
    "addPermission(bytes32,bytes32,uint8)": FunctionFragment;
    "connectApp(bytes32,address,bool)": FunctionFragment;
    "deployApp(bytes32,address,bytes)": FunctionFragment;
    "getAppAddress(bytes32)": FunctionFragment;
    "getPermissions(bytes32,bytes32)": FunctionFragment;
    "hasPermission(address,address,uint8)": FunctionFragment;
    "implementation()": FunctionFragment;
    "isTrustedForwarder(address)": FunctionFragment;
    "kernel()": FunctionFragment;
    "removePermission(bytes32,bytes32,uint8)": FunctionFragment;
    "resetApp(bytes32,address,bool)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "upgrade(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "KERNEL_ADMIN",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addPermission",
    values: [BytesLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "connectApp",
    values: [BytesLike, string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "deployApp",
    values: [BytesLike, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getAppAddress",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getPermissions",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hasPermission",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "implementation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isTrustedForwarder",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "kernel", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removePermission",
    values: [BytesLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "resetApp",
    values: [BytesLike, string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "upgrade", values: [string]): string;

  decodeFunctionResult(
    functionFragment: "KERNEL_ADMIN",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addPermission",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "connectApp", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deployApp", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAppAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPermissions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hasPermission",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "implementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isTrustedForwarder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "kernel", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removePermission",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "resetApp", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "upgrade", data: BytesLike): Result;

  events: {
    "Init(address)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "SetApp(bytes32,address,bool)": EventFragment;
    "Upgrade(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Init"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetApp"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Upgrade"): EventFragment;
}

export type InitEvent = TypedEvent<[string], { kernel: string }>;

export type InitEventFilter = TypedEventFilter<InitEvent>;

export type InitializedEvent = TypedEvent<[number], { version: number }>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export type SetAppEvent = TypedEvent<
  [string, string, boolean],
  { id: string; app: string; isNative: boolean }
>;

export type SetAppEventFilter = TypedEventFilter<SetAppEvent>;

export type UpgradeEvent = TypedEvent<[string], { code: string }>;

export type UpgradeEventFilter = TypedEventFilter<UpgradeEvent>;

export interface AppManager extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AppManagerInterface;

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
    KERNEL_ADMIN(overrides?: CallOverrides): Promise<[number]>;

    addPermission(
      requesterAppId: BytesLike,
      appId: BytesLike,
      permissionId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    connectApp(
      id: BytesLike,
      appAddress: string,
      isNative: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deployApp(
      id: BytesLike,
      appCode: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getAppAddress(id: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    getPermissions(
      entity: BytesLike,
      app: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    hasPermission(
      entityAddress: string,
      appAddress: string,
      permissionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    implementation(overrides?: CallOverrides): Promise<[string]>;

    isTrustedForwarder(
      forwarder: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    kernel(overrides?: CallOverrides): Promise<[string]>;

    removePermission(
      requesterAppId: BytesLike,
      appId: BytesLike,
      permissionId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    resetApp(
      id: BytesLike,
      appAddress: string,
      isNative: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    upgrade(
      appCode: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  KERNEL_ADMIN(overrides?: CallOverrides): Promise<number>;

  addPermission(
    requesterAppId: BytesLike,
    appId: BytesLike,
    permissionId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  connectApp(
    id: BytesLike,
    appAddress: string,
    isNative: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deployApp(
    id: BytesLike,
    appCode: string,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getAppAddress(id: BytesLike, overrides?: CallOverrides): Promise<string>;

  getPermissions(
    entity: BytesLike,
    app: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  hasPermission(
    entityAddress: string,
    appAddress: string,
    permissionId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  implementation(overrides?: CallOverrides): Promise<string>;

  isTrustedForwarder(
    forwarder: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  kernel(overrides?: CallOverrides): Promise<string>;

  removePermission(
    requesterAppId: BytesLike,
    appId: BytesLike,
    permissionId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  resetApp(
    id: BytesLike,
    appAddress: string,
    isNative: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  upgrade(
    appCode: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    KERNEL_ADMIN(overrides?: CallOverrides): Promise<number>;

    addPermission(
      requesterAppId: BytesLike,
      appId: BytesLike,
      permissionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    connectApp(
      id: BytesLike,
      appAddress: string,
      isNative: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    deployApp(
      id: BytesLike,
      appCode: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    getAppAddress(id: BytesLike, overrides?: CallOverrides): Promise<string>;

    getPermissions(
      entity: BytesLike,
      app: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    hasPermission(
      entityAddress: string,
      appAddress: string,
      permissionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    implementation(overrides?: CallOverrides): Promise<string>;

    isTrustedForwarder(
      forwarder: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    kernel(overrides?: CallOverrides): Promise<string>;

    removePermission(
      requesterAppId: BytesLike,
      appId: BytesLike,
      permissionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    resetApp(
      id: BytesLike,
      appAddress: string,
      isNative: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    upgrade(appCode: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "Init(address)"(kernel?: null): InitEventFilter;
    Init(kernel?: null): InitEventFilter;

    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "SetApp(bytes32,address,bool)"(
      id?: null,
      app?: null,
      isNative?: null
    ): SetAppEventFilter;
    SetApp(id?: null, app?: null, isNative?: null): SetAppEventFilter;

    "Upgrade(address)"(code?: null): UpgradeEventFilter;
    Upgrade(code?: null): UpgradeEventFilter;
  };

  estimateGas: {
    KERNEL_ADMIN(overrides?: CallOverrides): Promise<BigNumber>;

    addPermission(
      requesterAppId: BytesLike,
      appId: BytesLike,
      permissionId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    connectApp(
      id: BytesLike,
      appAddress: string,
      isNative: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deployApp(
      id: BytesLike,
      appCode: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getAppAddress(id: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    getPermissions(
      entity: BytesLike,
      app: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hasPermission(
      entityAddress: string,
      appAddress: string,
      permissionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    implementation(overrides?: CallOverrides): Promise<BigNumber>;

    isTrustedForwarder(
      forwarder: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    kernel(overrides?: CallOverrides): Promise<BigNumber>;

    removePermission(
      requesterAppId: BytesLike,
      appId: BytesLike,
      permissionId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    resetApp(
      id: BytesLike,
      appAddress: string,
      isNative: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    upgrade(
      appCode: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    KERNEL_ADMIN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addPermission(
      requesterAppId: BytesLike,
      appId: BytesLike,
      permissionId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    connectApp(
      id: BytesLike,
      appAddress: string,
      isNative: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deployApp(
      id: BytesLike,
      appCode: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getAppAddress(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPermissions(
      entity: BytesLike,
      app: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hasPermission(
      entityAddress: string,
      appAddress: string,
      permissionId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    implementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isTrustedForwarder(
      forwarder: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    kernel(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removePermission(
      requesterAppId: BytesLike,
      appId: BytesLike,
      permissionId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    resetApp(
      id: BytesLike,
      appAddress: string,
      isNative: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    upgrade(
      appCode: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
