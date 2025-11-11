"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdentityPublicKeyWASM = void 0;
exports.setDpp = setDpp;
const helpers_1 = require("../helpers");
let dpp;
function setDpp(_dpp) {
    dpp = _dpp;
}
class IdentityPublicKeyWASM {
    _rawIdentityPublicKey;
    constructor(id, purpose, securityLevel, keyType, readOnly, binaryData, disabledAt) {
        this._rawIdentityPublicKey = new dpp.IdentityPublicKeyWASM(id, (0, helpers_1.valueToDynamicEnum)(purpose), (0, helpers_1.valueToDynamicEnum)(securityLevel), (0, helpers_1.valueToDynamicEnum)(keyType), readOnly, binaryData, disabledAt ? { value: disabledAt.toString() } : undefined);
    }
    get keyId() {
        return this._rawIdentityPublicKey.keyId;
    }
    get purpose() {
        return this._rawIdentityPublicKey.purpose;
    }
    get purposeNumber() {
        return this._rawIdentityPublicKey.purposeNumber;
    }
    get securityLevel() {
        return this._rawIdentityPublicKey.securityLevel;
    }
    get securityLevelNumber() {
        return this._rawIdentityPublicKey.securityLevelNumber;
    }
    get keyType() {
        return this._rawIdentityPublicKey.keyType;
    }
    get keyTypeNumber() {
        return this._rawIdentityPublicKey.keyTypeNumber;
    }
    get readOnly() {
        return this._rawIdentityPublicKey.readOnly;
    }
    get data() {
        return this._rawIdentityPublicKey.data;
    }
    get disabledAt() {
        const timestamp = this._rawIdentityPublicKey.disabledAt;
        return timestamp ? BigInt(timestamp.value) : undefined;
    }
    set keyId(keyId) {
        this._rawIdentityPublicKey.keyId = keyId;
    }
    set purpose(purpose) {
        this._rawIdentityPublicKey.purpose = (0, helpers_1.valueToDynamicEnum)(purpose);
    }
    set purposeNumber(purpose) {
        this._rawIdentityPublicKey.purposeNumber = (0, helpers_1.valueToDynamicEnum)(purpose);
    }
    set securityLevel(securityLevel) {
        this._rawIdentityPublicKey.securityLevel = (0, helpers_1.valueToDynamicEnum)(securityLevel);
    }
    set securityLevelNumber(securityLevel) {
        this._rawIdentityPublicKey.securityLevelNumber = (0, helpers_1.valueToDynamicEnum)(securityLevel);
    }
    set keyType(keyType) {
        this._rawIdentityPublicKey.keyType = (0, helpers_1.valueToDynamicEnum)(keyType);
    }
    set keyTypeNumber(keyType) {
        this._rawIdentityPublicKey.keyTypeNumber = (0, helpers_1.valueToDynamicEnum)(keyType);
    }
    set readOnly(readOnly) {
        this._rawIdentityPublicKey.readOnly = readOnly;
    }
    set data(binaryData) {
        this._rawIdentityPublicKey.data = binaryData;
    }
    set disabledAt(disabledAt) {
        this._rawIdentityPublicKey.disabledAt = { value: disabledAt };
    }
    removeDisabledAt() {
        this._rawIdentityPublicKey.removeDisabledAt();
    }
    getPublicKeyHash() {
        return this._rawIdentityPublicKey.getPublicKeyHash();
    }
    isMaster() {
        return this._rawIdentityPublicKey.isMaster();
    }
    bytes() {
        return this._rawIdentityPublicKey.bytes();
    }
    hex() {
        return this._rawIdentityPublicKey.hex();
    }
    base64() {
        return this._rawIdentityPublicKey.base64();
    }
    static fromBytes(bytes) {
        const rawInstance = dpp.IdentityPublicKeyWASM.fromBytes(bytes);
        return this.createFromRawInstance(rawInstance);
    }
    static fromHex(hex) {
        const rawInstance = dpp.IdentityPublicKeyWASM.fromHex(hex);
        return this.createFromRawInstance(rawInstance);
    }
    static fromBase64(base64) {
        const rawInstance = dpp.IdentityPublicKeyWASM.fromBase64(base64);
        return this.createFromRawInstance(rawInstance);
    }
    static createFromRawInstance(rawInstance) {
        const instance = Object.create(this.prototype);
        instance._rawIdentityPublicKey = rawInstance;
        return instance;
    }
    getRawInstance() {
        return this._rawIdentityPublicKey;
    }
}
exports.IdentityPublicKeyWASM = IdentityPublicKeyWASM;
