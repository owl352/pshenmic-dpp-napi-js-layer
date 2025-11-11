import {
  DashPlatformProtocol,
  RawIdentity,
  IdentifierLike,
  EnumLike,
  DynamicValue,
} from "../types";
import {IdentifierWASM} from "./Identifier";
import {IdentityPublicKeyWASM} from "./IdentityPublicKey";
import {valueToDynamicEnum} from "../helpers";

let dpp: DashPlatformProtocol;

export function setDpp(_dpp: DashPlatformProtocol) {
  dpp = _dpp;
}

export class IdentityWASM {
  #rawIdentity: RawIdentity

  constructor(rawId: IdentifierLike | IdentifierWASM, platformVersion: EnumLike) {
    const id = new IdentifierWASM(rawId);

    let dynamicEnumValue: DynamicValue = valueToDynamicEnum(platformVersion)

    this.#rawIdentity = new dpp.IdentityWASM(id, dynamicEnumValue)
  }

  set id(rawId: IdentifierLike | IdentifierWASM) {
    this.#rawIdentity.id = new IdentifierWASM(rawId);
  }

  set balance(balance: BigInt) {
    this.#rawIdentity.balance = {value: balance.toString()}
  }

  set revision(revision: BigInt) {
    this.#rawIdentity.revision = {value: revision.toString()}
  }

  get id(): IdentifierWASM {
    return <IdentifierWASM>this.#rawIdentity.id
  }

  get balance(): BigInt {
    return BigInt(this.#rawIdentity.balance.value)
  }

  get revision(): BigInt {
    return BigInt(this.#rawIdentity.revision.value)
  }

  addPublicKey(publicKey: IdentityPublicKeyWASM): void {
    this.#rawIdentity.addPublicKey(publicKey.getRawInstance())
  }

  getPublicKeyById(keyId: number): IdentityPublicKeyWASM | undefined {
    const rawKeyInstance = this.#rawIdentity.getPublicKeyById(keyId)

    if (rawKeyInstance) {

      return IdentityPublicKeyWASM.createFromRawInstance(rawKeyInstance)
    }

    return undefined
  }

  getPublicKeys(): Array<IdentityPublicKeyWASM> {
    const rawKeysArr = this.#rawIdentity.getPublicKeys()

    return rawKeysArr.map(IdentityPublicKeyWASM.createFromRawInstance)
  }

  static fromHex(hex: string): IdentityWASM {
    const rawInstance = dpp.IdentityWASM.fromHex(hex)

    const instance: IdentityWASM = Object.create(this.prototype)
    instance.#rawIdentity = rawInstance

    return instance
  }

  static fromBase64(base64: string): IdentityWASM {
    const rawInstance = dpp.IdentityWASM.fromBase64(base64)

    const instance: IdentityWASM = Object.create(this.prototype)
    instance.#rawIdentity = rawInstance

    return instance
  }

  static fromBytes(bytes: Uint8Array): IdentityWASM {
    const rawInstance = dpp.IdentityWASM.fromBytes(bytes)

    const instance: IdentityWASM = Object.create(this.prototype)
    instance.#rawIdentity = rawInstance

    return instance
  }

  bytes(): Uint8Array {
    return this.#rawIdentity.bytes()
  }

  hex(): string {
    return this.#rawIdentity.hex()
  }

  base64(): string {
    return this.#rawIdentity.base64()
  }

  static createFromRawInstance(rawInstance: RawIdentity) {
    const instance: IdentityWASM = Object.create(this.prototype)
    instance.#rawIdentity = rawInstance

    return instance
  }

  getRawInstance(): RawIdentity {
    return this.#rawIdentity
  }
}