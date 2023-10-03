import * as Joi from 'joi';
// joi validation for admin object.
export const validateObject = (input: object) => {
  const schema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
  });
  return schema.validate(input);
};
