"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtMiddleware = void 0;
const common_1 = require("@nestjs/common");
const jsonwebtoken_1 = require("jsonwebtoken");
const constMessage_1 = require("../constant/constMessage");
let JwtMiddleware = class JwtMiddleware {
    async use(req, res, next) {
        try {
            const token = req.headers.authorization;
            if (token) {
                (0, jsonwebtoken_1.verify)(token, 'adminSecretKey124', function (err, decoded) {
                    if (err) {
                        return res.status(500).send(err.message);
                    }
                    else {
                        req.user = decoded.userId;
                        next();
                    }
                });
            }
            else {
                return res.status(common_1.HttpStatus.UNAUTHORIZED).json({
                    message: constMessage_1.MESSAGE.TOKEN_NOT_FOUND
                });
            }
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.JwtMiddleware = JwtMiddleware;
exports.JwtMiddleware = JwtMiddleware = __decorate([
    (0, common_1.Injectable)()
], JwtMiddleware);
//# sourceMappingURL=jwt.js.map