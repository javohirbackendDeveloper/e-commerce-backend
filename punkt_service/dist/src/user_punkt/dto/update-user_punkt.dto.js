"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserPunktDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_user_punkt_dto_1 = require("./create-user_punkt.dto");
class UpdateUserPunktDto extends (0, mapped_types_1.PartialType)(create_user_punkt_dto_1.CreateUserPunktDto) {
}
exports.UpdateUserPunktDto = UpdateUserPunktDto;
//# sourceMappingURL=update-user_punkt.dto.js.map