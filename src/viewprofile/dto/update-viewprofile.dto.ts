import { PartialType } from '@nestjs/mapped-types';
import { CreateViewprofileDto } from './create-viewprofile.dto';

export class UpdateViewprofileDto extends PartialType(CreateViewprofileDto) {}
