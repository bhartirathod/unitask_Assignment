import { Model } from 'mongoose';
import { SignupDocumnet } from 'src/signup/schema/signup.schema';
import { CreateLoginDto } from './dto/create-login.dto';
export declare class LoginService {
    private signupModel;
    constructor(signupModel: Model<SignupDocumnet>);
    auth(userLoginDto: CreateLoginDto): Promise<{
        userId: any;
        message: string;
        token: any;
    }>;
}
