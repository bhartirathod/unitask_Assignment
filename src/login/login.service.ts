import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { compare } from 'bcryptjs';
import { Model } from 'mongoose';
import { sign } from 'jsonwebtoken';
import { MESSAGE } from 'src/constant/constMessage';
import { Signup, SignupDocumnet } from 'src/signup/schema/signup.schema';
import { CreateLoginDto } from './dto/create-login.dto';

@Injectable()
export class LoginService {
  constructor(
    @InjectModel(Signup.name) private signupModel: Model<SignupDocumnet>,
  ) {}
  async auth(userLoginDto: CreateLoginDto) {
    const userEmail = userLoginDto.email;
    const userData = await this.signupModel.findOne({
      $and: [{ email: userLoginDto.email }],
    });

    // if email is in correct this will return email is in correct.
    if (!userData) {
      throw new HttpException(MESSAGE.INVALID_EMAIL, HttpStatus.UNAUTHORIZED);
    }

    //compare password from the database
    const comparePass = await compare(
      userLoginDto?.password,
      userData?.password,
    );

    if (comparePass == true) {
      // generating the jwt token
      const token = sign({ userId: userData._id }, 'adminSecretKey124');
      if (token) {
        return {
          userId: userData._id,
          message: MESSAGE.status,
          token: token,
        };
      } else {
        throw new HttpException(MESSAGE.INVALID_TOKEN, HttpStatus.UNAUTHORIZED); // if token is expired, this will return (invalid token with 401 statusCode) message.
      }
    } else {
      throw new HttpException(
        MESSAGE.INVALID_PASSWORD,
        HttpStatus.UNAUTHORIZED,
      ); // if password is wrong, this will return (password is incorrect) message.
    }
  }
}
