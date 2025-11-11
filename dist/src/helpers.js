"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.valueToDynamicEnum = valueToDynamicEnum;
const constants_1 = require("./constants");
function valueToDynamicEnum(value) {
    if (typeof value === 'string') {
        return {
            type: 'Text',
            field0: value,
        };
    }
    else if (typeof value === 'number') {
        let numType;
        if (value <= constants_1.UINT8MAX) {
            numType = 'Uint8';
        }
        else if (value <= constants_1.UINT16MAX) {
            numType = 'Uint16';
        }
        else if (value <= constants_1.UINT32MAX) {
            numType = 'Uint32';
        }
        else {
            throw new Error(`out of range ${value}`);
        }
        return {
            type: numType,
            field0: value
        };
    }
    else {
        throw new Error(`${value} is not a number or string`);
    }
}
