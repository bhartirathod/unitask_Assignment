import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LoginModule } from './login/login.module';
import { SignupModule } from './signup/signup.module';
import { ViewprofileModule } from './viewprofile/viewprofile.module';
import { JwtMiddleware } from './middleware/jwt';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/deshboard'),
    LoginModule,
    SignupModule,
    ViewprofileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
// export class AppModule {}
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(JwtMiddleware)
      .exclude(
        { path: 'api/users/signup', method: RequestMethod.POST },
        { path: 'api/users/login', method: RequestMethod.POST },
      )
      .forRoutes('api/users');
  }
}
