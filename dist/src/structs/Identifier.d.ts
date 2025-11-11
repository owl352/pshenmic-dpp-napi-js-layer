import { DashPlatformProtocol, IdentifierLike, RawIdentifier } from "../types";
export declare function setDpp(_dpp: DashPlatformProtocol): void;
export declare class IdentifierWASM {
    #private;
    constructor(raw_id: IdentifierLike | IdentifierWASM);
    base58(): string;
    base64(): string;
    hex(): string;
    bytes(): Uint8Array;
    static createFromRawInstance(rawInstance: RawIdentifier): IdentifierWASM;
    getRawInstance(): RawIdentifier;
}
