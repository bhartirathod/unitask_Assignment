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
exports.LoginController = void 0;
const common_1 = require("@nestjs/common");
const login_service_1 = require("./login.service");
const create_login_dto_1 = require("./dto/create-login.dto");
const constantRoute_1 = require("../constant/constantRoute");
const users_validation_1 = require("./validation/users.validation");
let LoginController = class LoginController {
    constructor(loginService) {
        this.loginService = loginService;
    }
    create(createLoginDto) {
        try {
            const validate = (0, users_validation_1.validateObject)(createLoginDto);
            if (validate.error) {
                return validate.error.details[0].message;
            }
            else {
                return this.loginService.auth(validate.value);
            }
        }
        catch (error) {
            return error;
        }
    }
};
exports.LoginController = LoginController;
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)('/login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_login_dto_1.CreateLoginDto]),
    __metadata("design:returntype", void 0)
], LoginController.prototype, "create", null);
exports.LoginController = LoginController = __decorate([
    (0, common_1.Controller)(constantRoute_1.ROUTES.userRoute),
    __metadata("design:paramtypes", [login_service_1.LoginService])
], LoginController);
//# sourceMappingURL=login.controller.js.map