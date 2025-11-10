"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../config/database"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const seedUsers = async () => {
    const password = await bcrypt_1.default.hash("test@123", 10);
    try {
        const data = [
            {
                username: "test1234",
                email: "test@gmail.com",
                password: password,
                firstName: "test",
                lastName: 'test'
            }
        ];
        const query = `insert Into users (username,email,password,firstName, lastName) values (:username,:email,:password,:firstName, :lastName)`;
        await database_1.default.query(query, {
            replacements: {
                username: data[0].username,
                email: data[0].email,
                password: data[0].password,
                firstName: data[0].firstName,
                lastName: data[0].lastName
            },
        });
        console.log("User Created Sucessfully");
    }
    catch (err) {
        console.log(err);
    }
};
seedUsers();
