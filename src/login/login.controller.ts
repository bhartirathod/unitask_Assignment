import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { LoginService } from './login.service';
import { CreateLoginDto } from './dto/create-login.dto';
import { ROUTES } from 'src/constant/constantRoute';
import { validateObject } from './validation/users.validation';

@Controller(ROUTES.userRoute)
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @HttpCode(200)
  @Post('/login')
  create(@Body() createLoginDto: CreateLoginDto) {
    try {
      const validate = validateObject(createLoginDto);
      if (validate.error) {
        return validate.error.details[0].message;
      } else {
        return this.loginService.auth(validate.value);
      }
    } catch (error) {
      return error;
    }
  }
}
