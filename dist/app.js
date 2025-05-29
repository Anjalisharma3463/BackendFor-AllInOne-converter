"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/app.ts
const express_1 = __importDefault(require("express"));
const ConvertRoute_1 = __importDefault(require("./routes/ConvertRoute"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api', ConvertRoute_1.default);
app.listen(4000, () => console.log('Server running on http://localhost:4000'));
// api is :- http://localhost:5000/api/convert
