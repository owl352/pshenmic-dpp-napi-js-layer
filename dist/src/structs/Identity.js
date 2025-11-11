"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdentityWASM = void 0;
exports.setDpp = setDpp;
const Identifier_1 = require("./Identifier");
const IdentityPublicKey_1 = require("./IdentityPublicKey");
const helpers_1 = require("../helpers");
let dpp;
function setDpp(_dpp) {
    dpp = _dpp;
}
class IdentityWASM {
    #rawIdentity;
    constructor(rawId, platformVersion) {
        const id = new Identifier_1.IdentifierWASM(rawId);
        let dynamicEnumValue = (0, helpers_1.valueToDynamicEnum)(platformVersion);
        this.#rawIdentity = new dpp.IdentityWASM(id, dynamicEnumValue);
    }
    set id(rawId) {
        this.#rawIdentity.id = new Identifier_1.IdentifierWASM(rawId);
    }
    set balance(balance) {
        this.#rawIdentity.balance = { value: balance.toString() };
    }
    set revision(revision) {
        this.#rawIdentity.revision = { value: revision.toString() };
    }
    get id() {
        return this.#rawIdentity.id;
    }
    get balance() {
        return BigInt(this.#rawIdentity.balance.value);
    }
    get revision() {
        return BigInt(this.#rawIdentity.revision.value);
    }
    addPublicKey(publicKey) {
        this.#rawIdentity.addPublicKey(publicKey.getRawInstance());
    }
    getPublicKeyById(keyId) {
        const rawKeyInstance = this.#rawIdentity.getPublicKeyById(keyId);
        if (rawKeyInstance) {
            return IdentityPublicKey_1.IdentityPublicKeyWASM.createFromRawInstance(rawKeyInstance);
        }
        return undefined;
    }
    getPublicKeys() {
        const rawKeysArr = this.#rawIdentity.getPublicKeys();
        return rawKeysArr.map(IdentityPublicKey_1.IdentityPublicKeyWASM.createFromRawInstance);
    }
    static fromHex(hex) {
        const rawInstance = dpp.IdentityWASM.fromHex(hex);
        const instance = Object.create(this.prototype);
        instance.#rawIdentity = rawInstance;
        return instance;
    }
    static fromBase64(base64) {
        const rawInstance = dpp.IdentityWASM.fromBase64(base64);
        const instance = Object.create(this.prototype);
        instance.#rawIdentity = rawInstance;
        return instance;
    }
    static fromBytes(bytes) {
        const rawInstance = dpp.IdentityWASM.fromBytes(bytes);
        const instance = Object.create(this.prototype);
        instance.#rawIdentity = rawInstance;
        return instance;
    }
    bytes() {
        return this.#rawIdentity.bytes();
    }
    hex() {
        return this.#rawIdentity.hex();
    }
    base64() {
        return this.#rawIdentity.base64();
    }
    static createFromRawInstance(rawInstance) {
        const instance = Object.create(this.prototype);
        instance.#rawIdentity = rawInstance;
        return instance;
    }
    getRawInstance() {
        return this.#rawIdentity;
    }
}
exports.IdentityWASM = IdentityWASM;
