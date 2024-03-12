"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const envalid_1 = require("envalid");
exports.env = envalid_1.cleanEnv(process.env, {
    DB_USER: envalid_1.str(),
    DB_HOST: envalid_1.str(),
    DB_PASSWORD: envalid_1.str(),
    DB_DATABASE: envalid_1.str()
});
