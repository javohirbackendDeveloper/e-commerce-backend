import { PartialType } from '@nestjs/mapped-types';
import { CreatePunktAdminDto } from './create-punkt-admin.dto';

export class UpdatePunktAdminDto extends PartialType(CreatePunktAdminDto) {}
