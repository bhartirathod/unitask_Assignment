import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type SignupDocumnet = Signup & Document;
@Schema()
export class Signup {
  @Prop()
  firstName: string;
  @Prop()
  lastName: string;
  @Prop({ type: Number, default: null })
  phone: string;
  @Prop()
  email: string;
  @Prop()
  password: string;
  @Prop()
  dob: Date;

  // @Prop({ default: false })
  // isDeleted: boolean;
}
export const SignupSchema = SchemaFactory.createForClass(Signup);
