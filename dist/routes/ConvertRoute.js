"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer = require("multer");
const ConverterController_1 = __importDefault(require("../controller/ConverterController"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const upload = multer();
router.post('/convert', upload.single('file'), ConverterController_1.default);
exports.default = router;
