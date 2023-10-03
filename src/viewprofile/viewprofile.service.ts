import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Signup, SignupDocumnet } from 'src/signup/schema/signup.schema';
import { Model } from 'mongoose';

@Injectable()
export class ViewprofileService {
  constructor(
    @InjectModel(Signup.name) private signupModel: Model<SignupDocumnet>,
  ) {}
  // async view(req: IGetUserAuthInfoRequest) {
  //   const userDetail = await this.signupModel.findOne({
  //     _id: req.user,
  //   });
  //   if (!userDetail) {
  //     throw new HttpException(MESSAGE.DATA_NOT_FOUND, HttpStatus.NOT_FOUND); // if id is not exist in data base, this will return (not found) message.
  //   } else {
  //     return userDetail;
  //   }
  // }
}
