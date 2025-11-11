import { DashPlatformProtocol, RawIdentity, IdentifierLike, EnumLike } from "../types";
import { IdentifierWASM } from "./Identifier";
import { IdentityPublicKeyWASM } from "./IdentityPublicKey";
export declare function setDpp(_dpp: DashPlatformProtocol): void;
export declare class IdentityWASM {
    _rawIdentity: RawIdentity;
    constructor(rawId: IdentifierLike | IdentifierWASM, platformVersion: EnumLike);
    set id(rawId: IdentifierLike | IdentifierWASM);
    set balance(balance: BigInt);
    set revision(revision: BigInt);
    get id(): IdentifierWASM;
    get balance(): BigInt;
    get revision(): BigInt;
    addPublicKey(publicKey: IdentityPublicKeyWASM): void;
    getPublicKeyById(keyId: number): IdentityPublicKeyWASM | undefined;
    getPublicKeys(): Array<IdentityPublicKeyWASM>;
    static fromHex(hex: string): IdentityWASM;
    static fromBase64(base64: string): IdentityWASM;
    static fromBytes(bytes: Uint8Array): IdentityWASM;
    bytes(): Uint8Array;
    hex(): string;
    base64(): string;
    static createFromRawInstance(rawInstance: RawIdentity): IdentityWASM;
    getRawInstance(): RawIdentity;
}
