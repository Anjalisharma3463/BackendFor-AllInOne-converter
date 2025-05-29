"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SharpSingleton_1 = __importDefault(require("./SharpSingleton"));
class converter {
    async convert(buffer, targetFormat) {
        const sharpInstance = SharpSingleton_1.default.getInstance(buffer);
        switch (targetFormat) {
            case 'jpeg':
                return sharpInstance.jpeg().toBuffer();
            case 'png':
                return sharpInstance.png().toBuffer();
            case 'webp':
                return sharpInstance.webp().toBuffer();
            default:
                throw new Error('Unsupported format');
        }
    }
}
exports.default = converter;
