import { NestMiddleware } from '@nestjs/common';
import { Response, NextFunction } from 'express';
import { IGetUserAuthInfoRequest } from '../handler/jwt-request-handler';
export declare class JwtMiddleware implements NestMiddleware {
    use(req: IGetUserAuthInfoRequest, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>>>;
}
