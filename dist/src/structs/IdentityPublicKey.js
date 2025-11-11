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
    #rawIdentityPublicKey;
    constructor(id, purpose, securityLevel, keyType, readOnly, binaryData, disabledAt) {
        this.#rawIdentityPublicKey = new dpp.IdentityPublicKeyWASM(id, (0, helpers_1.valueToDynamicEnum)(purpose), (0, helpers_1.valueToDynamicEnum)(securityLevel), (0, helpers_1.valueToDynamicEnum)(keyType), readOnly, binaryData, disabledAt ? { value: disabledAt.toString() } : undefined);
    }
    get keyId() {
        return this.#rawIdentityPublicKey.keyId;
    }
    get purpose() {
        return this.#rawIdentityPublicKey.purpose;
    }
    get purposeNumber() {
        return this.#rawIdentityPublicKey.purposeNumber;
    }
    get securityLevel() {
        return this.#rawIdentityPublicKey.securityLevel;
    }
    get securityLevelNumber() {
        return this.#rawIdentityPublicKey.securityLevelNumber;
    }
    get keyType() {
        return this.#rawIdentityPublicKey.keyType;
    }
    get keyTypeNumber() {
        return this.#rawIdentityPublicKey.keyTypeNumber;
    }
    get readOnly() {
        return this.#rawIdentityPublicKey.readOnly;
    }
    get data() {
        return this.#rawIdentityPublicKey.data;
    }
    get disabledAt() {
        const timestamp = this.#rawIdentityPublicKey.disabledAt;
        return timestamp ? BigInt(timestamp.value) : undefined;
    }
    set keyId(keyId) {
        this.#rawIdentityPublicKey.keyId = keyId;
    }
    set purpose(purpose) {
        this.#rawIdentityPublicKey.purpose = (0, helpers_1.valueToDynamicEnum)(purpose);
    }
    set purposeNumber(purpose) {
        this.#rawIdentityPublicKey.purposeNumber = (0, helpers_1.valueToDynamicEnum)(purpose);
    }
    set securityLevel(securityLevel) {
        this.#rawIdentityPublicKey.securityLevel = (0, helpers_1.valueToDynamicEnum)(securityLevel);
    }
    set securityLevelNumber(securityLevel) {
        this.#rawIdentityPublicKey.securityLevelNumber = (0, helpers_1.valueToDynamicEnum)(securityLevel);
    }
    set keyType(keyType) {
        this.#rawIdentityPublicKey.keyType = (0, helpers_1.valueToDynamicEnum)(keyType);
    }
    set keyTypeNumber(keyType) {
        this.#rawIdentityPublicKey.keyTypeNumber = (0, helpers_1.valueToDynamicEnum)(keyType);
    }
    set readOnly(readOnly) {
        this.#rawIdentityPublicKey.readOnly = readOnly;
    }
    set data(binaryData) {
        this.#rawIdentityPublicKey.data = binaryData;
    }
    set disabledAt(disabledAt) {
        this.#rawIdentityPublicKey.disabledAt = { value: disabledAt };
    }
    removeDisabledAt() {
        this.#rawIdentityPublicKey.removeDisabledAt();
    }
    getPublicKeyHash() {
        return this.#rawIdentityPublicKey.getPublicKeyHash();
    }
    isMaster() {
        return this.#rawIdentityPublicKey.isMaster();
    }
    bytes() {
        return this.#rawIdentityPublicKey.bytes();
    }
    hex() {
        return this.#rawIdentityPublicKey.hex();
    }
    base64() {
        return this.#rawIdentityPublicKey.base64();
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
        instance.#rawIdentityPublicKey = rawInstance;
        return instance;
    }
    getRawInstance() {
        return this.#rawIdentityPublicKey;
    }
}
exports.IdentityPublicKeyWASM = IdentityPublicKeyWASM;
