import { InputType, TypeOfFilter } from "@prisma/client";
export declare class CreateGeneralFilterDto {
    title: string;
    inputType: InputType;
    type: TypeOfFilter;
}
export declare class CreateFilterValue {
    value: string[];
    filterId: string;
}
export declare class CreateSpecificFilterDto {
    title: string;
    inputType: InputType;
    type: TypeOfFilter;
    categoryIds: string[];
}
