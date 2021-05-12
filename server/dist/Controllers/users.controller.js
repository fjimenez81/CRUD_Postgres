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
exports.updateUser = exports.deleteUser = exports.createUser = exports.getUserById = exports.getUsers = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const database_1 = require("../database");
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield database_1.pool.query('SELECT * FROM users');
        return res.status(200).json(response.rows);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json('Internal server error');
    }
});
exports.getUsers = getUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const response = yield database_1.pool.query('SELECT * FROM users WHERE id=$1', [id]);
        return res.status(200).json(response.rows);
    }
    catch (error) {
        return res.status(500).json('Internal server error');
    }
});
exports.getUserById = getUserById;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password, id } = req.body;
        console.log(name);
        const salt = yield bcryptjs_1.default.genSalt(10);
        const hash = yield bcryptjs_1.default.hash(password, salt);
        yield database_1.pool.query('INSERT INTO users(name, email, password) VALUES($1, $2, $3)', [name, email, hash]);
        const token = jsonwebtoken_1.default.sign({ _id: id }, process.env.TOKEN_SECRET);
        return res.header('auth-token', token).json({
            message: 'User crated successfully',
            body: { user: { name, email, password: hash } }
        });
    }
    catch (error) {
        return res.status(500).json('Internal server error');
    }
});
exports.createUser = createUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const response = yield database_1.pool.query('DELETE FROM users WHERE id=$1', [id]);
        return res.json(`User ${id} deleted Successfully`);
    }
    catch (error) {
        return res.status(500).json('Internal server error');
    }
});
exports.deleteUser = deleteUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const { name, email } = req.body;
        const response = yield database_1.pool.query('UPDATE users SET name=$1, email=$2 WHERE id=$3', [name, email, id]);
        return res.json(`User ${id} update Successfully`);
    }
    catch (error) {
        return res.status(500).json('Internal server error');
    }
});
exports.updateUser = updateUser;
//# sourceMappingURL=users.controller.js.map