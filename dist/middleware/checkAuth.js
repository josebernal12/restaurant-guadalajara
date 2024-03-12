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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const UserModel_1 = __importDefault(require("../models/UserModel"));
const checkAuth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let token = '';
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jsonwebtoken_1.default.verify(token, process.env.KEYSECRET || 'defaultSecret');
            const user = yield UserModel_1.default.findByPk(decoded.id);
            if (user) {
                req.user = user;
                return next();
            }
        }
        catch (error) {
            return res.status(404).json({ msg: 'there was a mistake' });
        }
    }
    if (!token) {
        const error = new Error('Token no valid');
        return res.status(401).json({ msg: error.message });
    }
    next();
});
exports.default = checkAuth;
