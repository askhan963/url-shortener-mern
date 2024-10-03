"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const dbConfig_1 = __importDefault(require("./config/dbConfig"));
const cors_1 = __importDefault(require("cors"));
const shortUrl_1 = __importDefault(require("./routes/shortUrl"));
dotenv_1.default.config();
const PORT = process.env.PORT || 5555;
(0, dbConfig_1.default)();
// Middlewares
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded());
app.use((0, cors_1.default)({
    origin: "http://localhost:3000",
    credentials: true
}));
app.use("/api/", shortUrl_1.default);
app.listen(5555, () => {
    console.log("Server Listening on PORT 5555");
});
//# sourceMappingURL=index.js.map