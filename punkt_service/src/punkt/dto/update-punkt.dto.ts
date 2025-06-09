import { PartialType } from '@nestjs/mapped-types';
import { CreatePunktDto } from './create-punkt.dto';

export class UpdatePunktDto extends PartialType(CreatePunktDto) {}
