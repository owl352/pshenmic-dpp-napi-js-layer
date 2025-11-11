import * as protocol from "./protocolTypes"

export type DashPlatformProtocol = typeof protocol;
export type RawIdentifier = InstanceType<DashPlatformProtocol['IdentifierWASM']>
export type RawIdentity = InstanceType<DashPlatformProtocol['IdentityWASM']>
export type RawIdentityPublicKey = InstanceType<DashPlatformProtocol['IdentityPublicKeyWASM']>

export type DynamicValue = protocol.DynamicValue
export type IdentifierLike = string | Uint8Array | RawIdentifier
export type EnumLike = string | number;

export {PlatformVersionWASM, KeyType, NetworkWASM, Purpose, SecurityLevel} from "./protocolTypes"
