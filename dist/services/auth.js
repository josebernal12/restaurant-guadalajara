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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const generateToken_1 = __importDefault(require("../helpers/generateToken"));
const validate_1 = require("../helpers/validate");
const UserModel_1 = __importDefault(require("../models/UserModel"));
const bcrypt_1 = __importDefault(require("bcrypt"));
exports.register = ({ name, lastName, email, password, confirmPassword }) => __awaiter(void 0, void 0, void 0, function* () {
    const saltRounds = 10;
    try {
        if (confirmPassword !== password) {
            return 'Los passwords no coinciden';
        }
        else {
            // Devuelve una promesa que resuelve con el nuevo usuario
            return new Promise((resolve, reject) => {
                bcrypt_1.default.genSalt(saltRounds, (err, salt) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        bcrypt_1.default.hash(password, salt, (err, hash) => __awaiter(void 0, void 0, void 0, function* () {
                            if (err) {
                                reject(err);
                            }
                            else {
                                try {
                                    const newUser = yield UserModel_1.default.create({ name, lastName, email, password: hash });
                                    console.log(newUser.dataValues);
                                    const token = generateToken_1.default(newUser.dataValues.id);
                                    resolve({ user: newUser.dataValues, token });
                                }
                                catch (error) {
                                    reject(error);
                                }
                            }
                        }));
                    }
                });
            });
        }
    }
    catch (error) {
        console.log(error);
        throw error; // Asegúrate de propagar el error para que sea manejado correctamente fuera de esta función
    }
});
exports.login = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield validate_1.checkEmailInDB(email);
        if (!user) {
            return 'email o password no son correctos';
        }
        const match = yield bcrypt_1.default.compare(password, user.password);
        if (match) {
            const token = generateToken_1.default(user.dataValues.id);
            const userLogin = { user, token };
            return userLogin;
        }
        else {
            return 'email o password no son correctos';
        }
    }
    catch (error) {
        console.log(error);
    }
});
