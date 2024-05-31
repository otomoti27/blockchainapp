/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type {
  ZoneInteraction,
  ZoneInteractionInterface,
} from "../../../../seaport/contracts/lib/ZoneInteraction";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "orderHash",
        type: "bytes32",
      },
    ],
    name: "InvalidContractOrder",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "orderHash",
        type: "bytes32",
      },
    ],
    name: "InvalidRestrictedOrder",
    type: "error",
  },
] as const;

const _bytecode =
  "0x60808060405234601357603a908160198239f35b600080fdfe600080fdfea2646970667358221220b5286d1e1abec7467022ccfc74050dbd9ada7566d70431b0bf927ae1818ab4c464736f6c63430008110033";

type ZoneInteractionConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ZoneInteractionConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ZoneInteraction__factory extends ContractFactory {
  constructor(...args: ZoneInteractionConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      ZoneInteraction & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ZoneInteraction__factory {
    return super.connect(runner) as ZoneInteraction__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ZoneInteractionInterface {
    return new Interface(_abi) as ZoneInteractionInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ZoneInteraction {
    return new Contract(address, _abi, runner) as unknown as ZoneInteraction;
  }
}