import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type ViewprofileDocumnet = Viewprofile & Document;
@Schema()
export class Viewprofile {
  @Prop()
  firstName: string;
  @Prop()
  lastName: string;
}
export const ViewprofileSchema = SchemaFactory.createForClass(Viewprofile);
