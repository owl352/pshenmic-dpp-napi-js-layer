import {DashPlatformProtocol, DynamicValue, IdentifierLike, RawIdentifier, RawIdentityPublicKey} from "../types";

let dpp: DashPlatformProtocol;

export function setDpp(_dpp: DashPlatformProtocol) {
  dpp = _dpp;
}

export class IdentifierWASM {
  #rawIdentifier: RawIdentifier

  constructor(raw_id: IdentifierLike | IdentifierWASM) {
    if (raw_id instanceof IdentifierWASM) {
      return raw_id;
    } else if (typeof raw_id === 'string') {
      const id: DynamicValue = {
        type: "Text",
        field0: raw_id,
      }

      this.#rawIdentifier = new dpp.IdentifierWASM(id);
    } else if (raw_id instanceof Uint8Array) {
      const id: DynamicValue = {
        type: "Bytes",
        field0: raw_id
      }

      this.#rawIdentifier = new dpp.IdentifierWASM(id);
    } else {
      throw new Error("Invalid raw ID");
    }
  }

  base58(): string {
    return this.#rawIdentifier.base58();
  }

  base64(): string {
    return this.#rawIdentifier.base64();
  }

  hex(): string {
    return this.#rawIdentifier.hex();
  }

  bytes(): Uint8Array {
    return this.#rawIdentifier.bytes()
  }

  static createFromRawInstance(rawInstance: RawIdentifier) {
    const instance: IdentifierWASM = Object.create(this.prototype)
    instance.#rawIdentifier = rawInstance

    return instance
  }

  getRawInstance(): RawIdentifier {
    return this.#rawIdentifier
  }
}