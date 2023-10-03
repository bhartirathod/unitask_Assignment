import { LoginService } from './login.service';
import { CreateLoginDto } from './dto/create-login.dto';
export declare class LoginController {
    private readonly loginService;
    constructor(loginService: LoginService);
    create(createLoginDto: CreateLoginDto): any;
}
