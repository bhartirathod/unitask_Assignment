import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { ViewprofileService } from './viewprofile.service';
import { CreateViewprofileDto } from './dto/create-viewprofile.dto';
import { UpdateViewprofileDto } from './dto/update-viewprofile.dto';
import { ROUTES } from 'src/constant/constantRoute';
import { IGetUserAuthInfoRequest } from 'src/handler/jwt-request-handler';
import axios from 'axios';
// import { IGetUserAuthInfoRequest } from 'src/handler/jwt-request-handler';

@Controller(ROUTES.userRoute)
export class ViewprofileController {
  constructor(private readonly viewprofileService: ViewprofileService) {}
  @Get('/me')
  async findAll(@Req() req: IGetUserAuthInfoRequest) {
    const response = await axios.get('https://api.chucknorris.io/jokes/random');
    return response.data;
  }
}
