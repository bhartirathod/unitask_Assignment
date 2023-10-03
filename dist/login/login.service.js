"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const bcryptjs_1 = require("bcryptjs");
const mongoose_2 = require("mongoose");
const jsonwebtoken_1 = require("jsonwebtoken");
const constMessage_1 = require("../constant/constMessage");
const signup_schema_1 = require("../signup/schema/signup.schema");
let LoginService = class LoginService {
    constructor(signupModel) {
        this.signupModel = signupModel;
    }
    async auth(userLoginDto) {
        const userEmail = userLoginDto.email;
        const userData = await this.signupModel.findOne({
            $and: [{ email: userLoginDto.email }],
        });
        if (!userData) {
            throw new common_1.HttpException(constMessage_1.MESSAGE.INVALID_EMAIL, common_1.HttpStatus.UNAUTHORIZED);
        }
        const comparePass = await (0, bcryptjs_1.compare)(userLoginDto === null || userLoginDto === void 0 ? void 0 : userLoginDto.password, userData === null || userData === void 0 ? void 0 : userData.password);
        if (comparePass == true) {
            const token = (0, jsonwebtoken_1.sign)({ userId: userData._id }, 'adminSecretKey124');
            if (token) {
                return {
                    userId: userData._id,
                    message: constMessage_1.MESSAGE.status,
                    token: token,
                };
            }
            else {
                throw new common_1.HttpException(constMessage_1.MESSAGE.INVALID_TOKEN, common_1.HttpStatus.UNAUTHORIZED);
            }
        }
        else {
            throw new common_1.HttpException(constMessage_1.MESSAGE.INVALID_PASSWORD, common_1.HttpStatus.UNAUTHORIZED);
        }
    }
};
exports.LoginService = LoginService;
exports.LoginService = LoginService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(signup_schema_1.Signup.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], LoginService);
//# sourceMappingURL=login.service.js.map