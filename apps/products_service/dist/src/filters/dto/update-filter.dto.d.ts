import { CreateGeneralFilterDto } from "./create-filter.dto";
import { InputType } from "generated/prisma";
declare const UpdateFilterDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateGeneralFilterDto>>;
export declare class UpdateFilterDto extends UpdateFilterDto_base {
    title?: string;
    inputType?: InputType;
}
export {};
