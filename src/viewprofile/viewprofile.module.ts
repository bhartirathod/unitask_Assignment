import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ViewprofileService } from './viewprofile.service';
import { ViewprofileController } from './viewprofile.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Signup, SignupSchema } from 'src/signup/schema/signup.schema';
import { Viewprofile, ViewprofileSchema } from './schema/viewprofile.schema';
import { Login, LoginSchema } from 'src/login/schema/login.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Signup.name, schema: SignupSchema },
      { name: Viewprofile.name, schema: ViewprofileSchema },
      { name: Login.name, schema: LoginSchema },
    ]),
  ],
  controllers: [ViewprofileController],
  providers: [ViewprofileService],
})
export class ViewprofileModule {}
