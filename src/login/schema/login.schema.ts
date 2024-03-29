import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type LoginDocumnet = Login & Document;
@Schema()
export class Login {
  @Prop()
  email: string;
  @Prop()
  password: string;
}
export const LoginSchema = SchemaFactory.createForClass(Login);
