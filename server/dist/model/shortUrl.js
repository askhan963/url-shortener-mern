"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shortUrlModel = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const nanoid_1 = require("nanoid");
const urlSchema = new mongoose_1.Schema({
    originalUrl: {
        type: String,
        require: true
    },
    shortUrl: {
        type: String,
        require: true,
        default: () => (0, nanoid_1.nanoid)().substring(0, 10)
    },
    clicks: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});
exports.shortUrlModel = mongoose_1.default.model('shortUrl', urlSchema);
//# sourceMappingURL=shortUrl.js.map