"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdentifierWASM = void 0;
exports.setDpp = setDpp;
let dpp;
function setDpp(_dpp) {
    dpp = _dpp;
}
class IdentifierWASM {
    #rawIdentifier;
    constructor(raw_id) {
        if (raw_id instanceof IdentifierWASM) {
            return raw_id;
        }
        else if (typeof raw_id === 'string') {
            const id = {
                type: "Text",
                field0: raw_id,
            };
            this.#rawIdentifier = new dpp.IdentifierWASM(id);
        }
        else if (raw_id instanceof Uint8Array) {
            const id = {
                type: "Bytes",
                field0: raw_id
            };
            this.#rawIdentifier = new dpp.IdentifierWASM(id);
        }
        else {
            throw new Error("Invalid raw ID");
        }
    }
    base58() {
        return this.#rawIdentifier.base58();
    }
    base64() {
        return this.#rawIdentifier.base64();
    }
    hex() {
        return this.#rawIdentifier.hex();
    }
    bytes() {
        return this.#rawIdentifier.bytes();
    }
    static createFromRawInstance(rawInstance) {
        const instance = Object.create(this.prototype);
        instance.#rawIdentifier = rawInstance;
        return instance;
    }
    getRawInstance() {
        return this.#rawIdentifier;
    }
}
exports.IdentifierWASM = IdentifierWASM;
