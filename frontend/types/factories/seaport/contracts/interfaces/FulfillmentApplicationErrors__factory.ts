/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  FulfillmentApplicationErrors,
  FulfillmentApplicationErrorsInterface,
} from "../../../../seaport/contracts/interfaces/FulfillmentApplicationErrors";

const _abi = [
  {
    inputs: [],
    name: "InvalidFulfillmentComponentData",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "fulfillmentIndex",
        type: "uint256",
      },
    ],
    name: "MismatchedFulfillmentOfferAndConsiderationComponents",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "enum Side",
        name: "side",
        type: "uint8",
      },
    ],
    name: "MissingFulfillmentComponentOnAggregation",
    type: "error",
  },
  {
    inputs: [],
    name: "OfferAndConsiderationRequiredOnFulfillment",
    type: "error",
  },
] as const;

export class FulfillmentApplicationErrors__factory {
  static readonly abi = _abi;
  static createInterface(): FulfillmentApplicationErrorsInterface {
    return new Interface(_abi) as FulfillmentApplicationErrorsInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): FulfillmentApplicationErrors {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as FulfillmentApplicationErrors;
  }
}
