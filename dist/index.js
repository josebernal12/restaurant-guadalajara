"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const routes_1 = __importDefault(require("./routes/routes"));
const database_1 = __importDefault(require("./database/database"));
const products_1 = __importDefault(require("./routes/products"));
const app = express_1.default();
const port = process.env.PORT || 8080;
app.use(cors_1.default());
app.use(express_1.default.json());
app.use('/api/user', routes_1.default);
app.use('/api/product', products_1.default);
app.listen(port, () => {
    database_1.default.authenticate();
    console.log('Connection has been established successfully.');
    console.log('server listening to port 8080');
});
