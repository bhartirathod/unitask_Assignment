import { IsNotEmpty } from '@nestjs/class-validator';

export class CreateLoginDto {
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  password: string;
}
