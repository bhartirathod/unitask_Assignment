import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateSignupDto } from './dto/create-signup.dto';
import { Signup, SignupDocumnet } from './schema/signup.schema';
import { InjectModel } from '@nestjs/mongoose';
import { genSalt, hash } from 'bcryptjs';
import { Model } from 'mongoose';

@Injectable()
export class SignupService {
  constructor(
    @InjectModel(Signup.name) private signupModel: Model<SignupDocumnet>,
  ) {}

  async create(createSignupDto: CreateSignupDto) {
    const { password } = createSignupDto;
    const hashedPassword = await hash(password, await genSalt(10));
    createSignupDto.password = hashedPassword;
    const addUser = await this.signupModel.create(createSignupDto);
    return new HttpException('OK', HttpStatus.OK);
  }
}
