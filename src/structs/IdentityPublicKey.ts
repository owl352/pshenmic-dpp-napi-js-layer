import {DashPlatformProtocol, EnumLike, Purpose, RawIdentityPublicKey, SecurityLevel, KeyType} from "../types";
import {valueToDynamicEnum} from "../helpers";

let dpp: DashPlatformProtocol;

export function setDpp(_dpp: DashPlatformProtocol) {
  dpp = _dpp;
}

export class IdentityPublicKeyWASM {
  rawIdentityPublicKey: RawIdentityPublicKey;

  constructor(id: number, purpose: EnumLike, securityLevel: EnumLike, keyType: EnumLike, readOnly: boolean, binaryData: string, disabledAt?: bigint) {
    this.rawIdentityPublicKey = new dpp.IdentityPublicKeyWASM(
      id,
      valueToDynamicEnum(purpose),
      valueToDynamicEnum(securityLevel),
      valueToDynamicEnum(keyType),
      readOnly,
      binaryData,
      disabledAt ? {value: disabledAt.toString()} : undefined,
    )
  }

  get keyId(): number {
    return this.rawIdentityPublicKey.keyId
  }

  get purpose(): string {
    return this.rawIdentityPublicKey.purpose
  }

  get purposeNumber(): Purpose {
    return this.rawIdentityPublicKey.purposeNumber
  }

  get securityLevel(): string {
    return this.rawIdentityPublicKey.securityLevel
  }

  get securityLevelNumber(): SecurityLevel {
    return this.rawIdentityPublicKey.securityLevelNumber
  }

  get keyType(): string {
    return this.rawIdentityPublicKey.keyType
  }

  get keyTypeNumber(): KeyType {
    return this.rawIdentityPublicKey.keyTypeNumber
  }

  get readOnly(): boolean {
    return this.rawIdentityPublicKey.readOnly
  }

  get data(): string {
    return this.rawIdentityPublicKey.data
  }

  get disabledAt(): BigInt | undefined {
    const timestamp = this.rawIdentityPublicKey.disabledAt

    return timestamp ? BigInt(timestamp.value) : undefined
  }

  set keyId(keyId: number) {
    this.rawIdentityPublicKey.keyId = keyId
  }

  set purpose(purpose: EnumLike) {
    this.rawIdentityPublicKey.purpose = valueToDynamicEnum(purpose)
  }

  set purposeNumber(purpose: EnumLike) {
    this.rawIdentityPublicKey.purposeNumber = valueToDynamicEnum(purpose)
  }

  set securityLevel(securityLevel: EnumLike) {
    this.rawIdentityPublicKey.securityLevel = valueToDynamicEnum(securityLevel)
  }

  set securityLevelNumber(securityLevel: EnumLike) {
    this.rawIdentityPublicKey.securityLevelNumber = valueToDynamicEnum(securityLevel)
  }

  set keyType(keyType: EnumLike) {
    this.rawIdentityPublicKey.keyType = valueToDynamicEnum(keyType)
  }

  set keyTypeNumber(keyType: EnumLike) {
    this.rawIdentityPublicKey.keyTypeNumber = valueToDynamicEnum(keyType)
  }

  set readOnly(readOnly: boolean) {
    this.rawIdentityPublicKey.readOnly = readOnly
  }

  set data(binaryData: string) {
    this.rawIdentityPublicKey.data = binaryData
  }

  set disabledAt(disabledAt: string) {
    this.rawIdentityPublicKey.disabledAt = {value: disabledAt}
  }

  removeDisabledAt(): void {
    this.rawIdentityPublicKey.removeDisabledAt()
  }

  getPublicKeyHash(): string {
    return this.rawIdentityPublicKey.getPublicKeyHash()
  }

  isMaster(): boolean {
    return this.rawIdentityPublicKey.isMaster()
  }

  bytes(): Uint8Array {
    return this.rawIdentityPublicKey.bytes()
  }

  hex(): string {
    return this.rawIdentityPublicKey.hex()
  }

  base64(): string {
    return this.rawIdentityPublicKey.base64()
  }

  static fromBytes(bytes: Uint8Array): IdentityPublicKeyWASM {
    const rawInstance = dpp.IdentityPublicKeyWASM.fromBytes(bytes)

    const instance: IdentityPublicKeyWASM = Object.create(this.prototype)

    instance.rawIdentityPublicKey = rawInstance

    return instance
  }

  static fromHex(hex: string): IdentityPublicKeyWASM {
    const rawInstance = dpp.IdentityPublicKeyWASM.fromHex(hex)

    const instance: IdentityPublicKeyWASM = Object.create(this.prototype)

    instance.rawIdentityPublicKey = rawInstance

    return instance
  }

  static fromBase64(base64: string): IdentityPublicKeyWASM {
    const rawInstance = dpp.IdentityPublicKeyWASM.fromBase64(base64)

    const instance: IdentityPublicKeyWASM = Object.create(this.prototype)

    instance.rawIdentityPublicKey = rawInstance

    return instance
  }
}