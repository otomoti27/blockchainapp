/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type {
  ConsiderationBase,
  ConsiderationBaseInterface,
} from "../../../../seaport/contracts/lib/ConsiderationBase";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "conduitController",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "BadFraction",
    type: "error",
  },
  {
    inputs: [],
    name: "CannotCancelOrder",
    type: "error",
  },
  {
    inputs: [],
    name: "ConsiderationLengthNotEqualToTotalOriginal",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "orderIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "considerationIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "shortfallAmount",
        type: "uint256",
      },
    ],
    name: "ConsiderationNotMet",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientNativeTokensSupplied",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidBasicOrderParameterEncoding",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "conduit",
        type: "address",
      },
    ],
    name: "InvalidCallToConduit",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "conduitKey",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "conduit",
        type: "address",
      },
    ],
    name: "InvalidConduit",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "InvalidMsgValue",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidNativeOfferItem",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endTime",
        type: "uint256",
      },
    ],
    name: "InvalidTime",
    type: "error",
  },
  {
    inputs: [],
    name: "MissingOriginalConsiderationItems",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "NativeTokenTransferGenericFailure",
    type: "error",
  },
  {
    inputs: [],
    name: "NoSpecifiedOrdersAvailable",
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
    name: "OrderAlreadyFilled",
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
    name: "OrderIsCancelled",
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
    name: "OrderPartiallyFilled",
    type: "error",
  },
  {
    inputs: [],
    name: "PartialFillsNotEnabledForOrder",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newCounter",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "offerer",
        type: "address",
      },
    ],
    name: "CounterIncremented",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "orderHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "offerer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "zone",
        type: "address",
      },
    ],
    name: "OrderCancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "orderHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "offerer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "zone",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        components: [
          {
            internalType: "enum ItemType",
            name: "itemType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "identifier",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct SpentItem[]",
        name: "offer",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "enum ItemType",
            name: "itemType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "identifier",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "address payable",
            name: "recipient",
            type: "address",
          },
        ],
        indexed: false,
        internalType: "struct ReceivedItem[]",
        name: "consideration",
        type: "tuple[]",
      },
    ],
    name: "OrderFulfilled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "orderHash",
        type: "bytes32",
      },
      {
        components: [
          {
            internalType: "address",
            name: "offerer",
            type: "address",
          },
          {
            internalType: "address",
            name: "zone",
            type: "address",
          },
          {
            components: [
              {
                internalType: "enum ItemType",
                name: "itemType",
                type: "uint8",
              },
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "identifierOrCriteria",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "startAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "endAmount",
                type: "uint256",
              },
            ],
            internalType: "struct OfferItem[]",
            name: "offer",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "enum ItemType",
                name: "itemType",
                type: "uint8",
              },
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "identifierOrCriteria",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "startAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "endAmount",
                type: "uint256",
              },
              {
                internalType: "address payable",
                name: "recipient",
                type: "address",
              },
            ],
            internalType: "struct ConsiderationItem[]",
            name: "consideration",
            type: "tuple[]",
          },
          {
            internalType: "enum OrderType",
            name: "orderType",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "startTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endTime",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "zoneHash",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "salt",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "conduitKey",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "totalOriginalConsiderationItems",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct OrderParameters",
        name: "orderParameters",
        type: "tuple",
      },
    ],
    name: "OrderValidated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32[]",
        name: "orderHashes",
        type: "bytes32[]",
      },
    ],
    name: "OrdersMatched",
    type: "event",
  },
] as const;

const _bytecode =
  "0x6101c06040523461006a5761001a6100156100c3565b61011e565b604051603a9081610637823960805181505060a05181505060c05181505060e05181505061010051815050610120518150506101405181505061016051815050610180518150506101a051815050f35b600080fd5b604081019081106001600160401b0382111761008a57604052565b634e487b7160e01b600052604160045260246000fd5b601f909101601f19168101906001600160401b0382119082101761008a57604052565b610671602081380391826040519384926100dd82856100a0565b83398101031261006a57516001600160a01b038116810361006a5790565b919082604091031261006a576020825192015190565b506040513d6000823e3d90fd5b604060049161012b610509565b610120526101005260e05260c05260a052608052466101405261017a60c0519060805160a0516040519360005281602052604052466060523060805260a0600020926040526000606052608052565b610160526001600160a01b03166101808190528151630a96ad3960e01b815292839182905afa9081156101e6575b6000916101b7575b506101a052565b6101d8915060403d81116101df575b6101d081836100a0565b8101906100fb565b50386101b0565b503d6101c6565b6101ee610111565b6101a8565b604051906102008261006f565b60038252565b6040519060a082016001600160401b0381118382101761008a57604052606a8252565b6040519060c082016001600160401b0381118382101761008a576040526084825263656e742960e01b60a0837f436f6e73696465726174696f6e4974656d2875696e7438206974656d5479706560208201527f2c6164647265737320746f6b656e2c75696e74323536206964656e746966696560408201527f724f7243726974657269612c75696e74323536207374617274416d6f756e742c60608201527f75696e7432353620656e64416d6f756e742c616464726573732072656369706960808201520152565b6040519061010082016001600160401b0381118382101761008a5760405260d482527f4b65792c75696e7432353620636f756e7465722900000000000000000000000060e0837f4f72646572436f6d706f6e656e74732861646472657373206f6666657265722c60208201527f61646472657373207a6f6e652c4f666665724974656d5b5d206f666665722c4360408201527f6f6e73696465726174696f6e4974656d5b5d20636f6e73696465726174696f6e60608201527f2c75696e7438206f72646572547970652c75696e74323536207374617274546960808201527f6d652c75696e7432353620656e6454696d652c62797465733332207a6f6e654860a08201527f6173682c75696e743235362073616c742c6279746573333220636f6e6475697460c08201520152565b60405190608082016001600160401b0381118382101761008a576040526052825271766572696679696e67436f6e74726163742960701b6060837f454950373132446f6d61696e28737472696e67206e616d652c737472696e672060208201527f76657273696f6e2c75696e7432353620636861696e49642c616464726573732060408201520152565b9081519160005b8381106104c1575050016000815290565b80602080928401015181850152016104b0565b6104f96104f394936104f36105079460405197889560208701906104a9565b906104a9565b03601f1981018452836100a0565b565b6040516105158161006f565b600d81526c21b7b739b4b232b930ba34b7b760991b6020918201527f64987f6373075400d7cbff689f2b7bc23753c7e6ce20688196489b8f5d9d7e6c9161055a6101f3565b8281019062312e3560e81b825251902091610573610206565b818101927f4f666665724974656d2875696e7438206974656d547970652c6164647265737384527f20746f6b656e2c75696e74323536206964656e7469666965724f72437269746560408301527f7269612c75696e74323536207374617274416d6f756e742c75696e7432353620606083015269656e64416d6f756e742960b01b6080830152610601610229565b9261062e61060d6102f1565b9361061661041f565b838151910120968151902095805184820120956104d4565b80519101209056fe600080fdfea26469706673582212201581c099fbd34531a087ac98aa36f898a00783f7de685ad25a44fac19fd3cd0664736f6c63430008110033";

type ConsiderationBaseConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ConsiderationBaseConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ConsiderationBase__factory extends ContractFactory {
  constructor(...args: ConsiderationBaseConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    conduitController: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(conduitController, overrides || {});
  }
  override deploy(
    conduitController: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(conduitController, overrides || {}) as Promise<
      ConsiderationBase & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ConsiderationBase__factory {
    return super.connect(runner) as ConsiderationBase__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ConsiderationBaseInterface {
    return new Interface(_abi) as ConsiderationBaseInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ConsiderationBase {
    return new Contract(address, _abi, runner) as unknown as ConsiderationBase;
  }
}
