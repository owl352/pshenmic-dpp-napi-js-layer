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
    _rawIdentity;
    constructor(rawId, platformVersion) {
        const id = new Identifier_1.IdentifierWASM(rawId);
        let dynamicEnumValue = (0, helpers_1.valueToDynamicEnum)(platformVersion);
        this._rawIdentity = new dpp.IdentityWASM(id, dynamicEnumValue);
    }
    set id(rawId) {
        this._rawIdentity.id = new Identifier_1.IdentifierWASM(rawId);
    }
    set balance(balance) {
        this._rawIdentity.balance = { value: balance.toString() };
    }
    set revision(revision) {
        this._rawIdentity.revision = { value: revision.toString() };
    }
    get id() {
        return this._rawIdentity.id;
    }
    get balance() {
        return BigInt(this._rawIdentity.balance.value);
    }
    get revision() {
        return BigInt(this._rawIdentity.revision.value);
    }
    addPublicKey(publicKey) {
        this._rawIdentity.addPublicKey(publicKey.getRawInstance());
    }
    getPublicKeyById(keyId) {
        const rawKeyInstance = this._rawIdentity.getPublicKeyById(keyId);
        if (rawKeyInstance) {
            return IdentityPublicKey_1.IdentityPublicKeyWASM.createFromRawInstance(rawKeyInstance);
        }
        return undefined;
    }
    getPublicKeys() {
        const rawKeysArr = this._rawIdentity.getPublicKeys();
        return rawKeysArr.map(IdentityPublicKey_1.IdentityPublicKeyWASM.createFromRawInstance);
    }
    static fromHex(hex) {
        const rawInstance = dpp.IdentityWASM.fromHex(hex);
        return this.createFromRawInstance(rawInstance);
    }
    static fromBase64(base64) {
        const rawInstance = dpp.IdentityWASM.fromBase64(base64);
        return this.createFromRawInstance(rawInstance);
    }
    static fromBytes(bytes) {
        const rawInstance = dpp.IdentityWASM.fromBytes(bytes);
        return this.createFromRawInstance(rawInstance);
    }
    bytes() {
        return this._rawIdentity.bytes();
    }
    hex() {
        return this._rawIdentity.hex();
    }
    base64() {
        return this._rawIdentity.base64();
    }
    static createFromRawInstance(rawInstance) {
        const instance = Object.create(this.prototype);
        instance._rawIdentity = rawInstance;
        return instance;
    }
    getRawInstance() {
        return this._rawIdentity;
    }
}
exports.IdentityWASM = IdentityWASM;
