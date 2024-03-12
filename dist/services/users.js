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
exports.updateUser = exports.deleteUser = exports.getUserById = exports.getUsers = exports.addUser = void 0;
const UserModel_1 = __importDefault(require("../models/UserModel"));
exports.addUser = () => {
    try {
    }
    catch (error) {
        console.log(error);
    }
};
exports.getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield UserModel_1.default.findAll();
        if (!users) {
            return 'no hay usuarios';
        }
        return users;
    }
    catch (error) {
        console.log(error);
    }
});
exports.getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield UserModel_1.default.findByPk(id);
        if (!user) {
            return 'no hay nigun usuario para ese id';
        }
        return user;
    }
    catch (error) {
        console.log(error);
    }
});
exports.deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield UserModel_1.default.destroy({
            where: { id }
        });
        if (!user) {
            return 'no hay ningun usuario con ese id';
        }
        return 'usuario eliminado';
    }
    catch (error) {
        console.log(error);
    }
});
exports.updateUser = (id, name, lastName, email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userUpdate = yield UserModel_1.default.update({ name, lastName, email }, {
            where: {
                id
            },
            returning: true // Agregar la propiedad returning
        });
        if (userUpdate.includes(0)) {
            return 'error en la actualizacion';
        }
        const user = yield UserModel_1.default.findByPk(id);
        return user;
    }
    catch (error) {
        console.log(error);
    }
});
