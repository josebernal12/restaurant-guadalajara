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
exports.loginController = exports.registerController = void 0;
const auth_1 = require("../services/auth");
exports.registerController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, lastName, email, password, confirmPassword } = req.body;
    const user = yield auth_1.register({ name, lastName, email, password, confirmPassword });
    console.log(user);
    res.json({
        user,
        message: "User Created Succesfully"
    });
});
exports.loginController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield auth_1.login(email, password);
    res.json(user);
});
