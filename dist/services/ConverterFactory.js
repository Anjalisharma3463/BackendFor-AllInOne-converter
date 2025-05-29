"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Converter_1 = __importDefault(require("./Converter"));
class ConverterFactory {
    static createConverter(mimetype) {
        try {
            if (mimetype.startsWith('image/')) {
                return new Converter_1.default();
            }
        }
        catch (error) {
            throw new Error('Unsupported mimetype');
        }
    }
}
exports.default = ConverterFactory;
