import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SignupService } from './signup.service';
import { CreateSignupDto } from './dto/create-signup.dto';
import { UpdateSignupDto } from './dto/update-signup.dto';
import { ROUTES } from 'src/constant/constantRoute';

@Controller(ROUTES.userRoute)
export class SignupController {
  constructor(private readonly signupService: SignupService) {}

  @Post('signup')
  create(@Body() createSignupDto: CreateSignupDto) {
    return this.signupService.create(createSignupDto);
  }

  // @Get('/ab')
  // findAll() {
  //   return this.signupService.findAll();
  // }
}
