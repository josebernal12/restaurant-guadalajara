"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserController = exports.deleteUserController = exports.getUserByIdController = exports.getUsersController = void 0;
const users_1 = require("../services/users");
exports.getUsersController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield users_1.getUsers();
    res.json(users);
});
exports.getUserByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const users = yield users_1.getUserById(id);
    res.json(users);
});
exports.deleteUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const message = yield users_1.deleteUser(id);
    res.json(message);
});
exports.updateUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, lastName, email } = req.body;
    const { id } = req.params;
    const user = yield users_1.updateUser(id, name, lastName, email);
    res.json(user);
});
