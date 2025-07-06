import { LocationService } from "./location.service";
import { UpdateLocationDto } from "./dto/update-location.dto";
import { CreateCityDto, CreateProvinceDto } from "./dto/create-location.dto";
export declare class LocationController {
    private readonly locationService;
    constructor(locationService: LocationService);
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
    getAllProvinces(): Promise<({
        cities: {
            id: string;
            title: string;
            parenProvinceId: string;
        }[];
    } & {
        id: string;
        title: string;
    })[]>;
    getCitiesByProvince(provinceId: string): Promise<{
        id: string;
        title: string;
        parenProvinceId: string;
    }[]>;
}
