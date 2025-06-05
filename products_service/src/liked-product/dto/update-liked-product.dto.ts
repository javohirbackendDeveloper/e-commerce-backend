import { PartialType } from '@nestjs/mapped-types';
import { CreateLikedProductDto } from './create-liked-product.dto';

export class UpdateLikedProductDto extends PartialType(CreateLikedProductDto) {}
