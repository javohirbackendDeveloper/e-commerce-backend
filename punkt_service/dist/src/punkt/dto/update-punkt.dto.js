"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePunktDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_punkt_dto_1 = require("./create-punkt.dto");
class UpdatePunktDto extends (0, mapped_types_1.PartialType)(create_punkt_dto_1.CreatePunktDto) {
}
exports.UpdatePunktDto = UpdatePunktDto;
//# sourceMappingURL=update-punkt.dto.js.map