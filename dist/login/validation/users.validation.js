"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateObject = void 0;
const Joi = require("joi");
const validateObject = (input) => {
    const schema = Joi.object({
        email: Joi.string().required(),
        password: Joi.string().required(),
    });
    return schema.validate(input);
};
exports.validateObject = validateObject;
//# sourceMappingURL=users.validation.js.map