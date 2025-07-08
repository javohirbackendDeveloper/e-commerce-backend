import { PartialType } from '@nestjs/mapped-types';
import { CreateUserPunktDto } from './create-user_punkt.dto';

export class UpdateUserPunktDto extends PartialType(CreateUserPunktDto) {}
