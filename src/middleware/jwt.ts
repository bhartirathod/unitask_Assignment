import {
  Injectable,
  NestMiddleware,
  HttpStatus,
  InternalServerErrorException,
} from '@nestjs/common';
import { Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { IGetUserAuthInfoRequest } from '../handler/jwt-request-handler';
import { MESSAGE } from 'src/constant/constMessage';

@Injectable()
export class JwtMiddleware implements NestMiddleware {
  async use(req: IGetUserAuthInfoRequest, res: Response, next: NextFunction) {
    try {
      const token = req.headers.authorization;
      if (token) {
        verify(token, 'adminSecretKey124', function (err, decoded: any) {
          if (err) {
            return res.status(500).send(err.message);
          } else {
            req.user = decoded.userId;
            next();
          }
        });
      } else {
        return res.status(HttpStatus.UNAUTHORIZED).json({
          message: MESSAGE.TOKEN_NOT_FOUND
        });
      }
    } catch (error) {
      throw new InternalServerErrorException(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
