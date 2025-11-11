import * as protocol from "pshenmic-dpp-napi"
import {Uint64String} from "pshenmic-dpp-napi";

export type DashPlatformProtocol = typeof protocol;
export type RawIdentifier = protocol.IdentifierWASM
export type RawIdentity = protocol.IdentityWASM
export type RawIdentityPublicKey = protocol.IdentityPublicKeyWASM

export type DynamicValue = protocol.DynamicValue
export type IdentifierLike = string | Uint8Array | RawIdentifier
export type EnumLike = string | number;

export {PlatformVersionWASM, KeyType, NetworkWASM, Purpose, SecurityLevel} from "pshenmic-dpp-napi"
