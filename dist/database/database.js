"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const envalid_1 = require("../helpers/envalid");
const sequelize = new sequelize_1.Sequelize(envalid_1.env.DB_DATABASE, envalid_1.env.DB_USER, envalid_1.env.DB_PASSWORD, {
    dialect: 'mysql',
    dialectModule: require('mysql2'),
    host: envalid_1.env.DB_HOST
});
exports.default = sequelize;
