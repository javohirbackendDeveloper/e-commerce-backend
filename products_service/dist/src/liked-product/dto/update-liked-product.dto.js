"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLikedProductDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_liked_product_dto_1 = require("./create-liked-product.dto");
class UpdateLikedProductDto extends (0, mapped_types_1.PartialType)(create_liked_product_dto_1.CreateLikedProductDto) {
}
exports.UpdateLikedProductDto = UpdateLikedProductDto;
//# sourceMappingURL=update-liked-product.dto.js.map