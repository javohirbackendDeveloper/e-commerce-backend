import { CreateCityDto, CreateProvinceDto } from "./dto/create-location.dto";
import { UpdateLocationDto } from "./dto/update-location.dto";
import { PrismaService } from "prisma/prisma.service";
export declare class LocationService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createProvinceDto: CreateProvinceDto): Promise<{
        id: string;
        title: string;
    }>;
    findAll(): Promise<({
        cities: {
            id: string;
            title: string;
            parenProvinceId: string;
        }[];
    } & {
        id: string;
        title: string;
    })[]>;
    findOne(id: string): Promise<{
        cities: {
            id: string;
            title: string;
            parenProvinceId: string;
        }[];
    } & {
        id: string;
        title: string;
    }>;
    update(id: string, updateLocationDto: UpdateLocationDto): Promise<{
        id: string;
        title: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        title: string;
    }>;
    createCity(createCityDto: CreateCityDto): Promise<{
        id: string;
        title: string;
        parenProvinceId: string;
    }>;
    removeCity(id: string): Promise<{
        id: string;
        title: string;
        parenProvinceId: string;
    }>;
    findAllCitiesByProvince(provinceId: string): Promise<{
        id: string;
        title: string;
        parenProvinceId: string;
    }[]>;
}
