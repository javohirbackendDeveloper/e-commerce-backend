import { CreateUserPunktDto } from "./dto/create-user_punkt.dto";
import { UpdateUserPunktDto } from "./dto/update-user_punkt.dto";
import { PrismaService } from "prisma/prisma.service";
export declare class UserPunktService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createUserPunktDto: CreateUserPunktDto): string;
    findAllPunktCities(): Promise<any[]>;
    findByCity(cityName: string): Promise<({
        workingHours: {
            id: string;
            day: import("@prisma/client").$Enums.Days;
            start_time: string;
            end_time: string;
            punktId: string;
        }[];
    } & {
        id: string;
        canTryOn: boolean;
        name: string;
        isActive: boolean;
        locationText: string;
        locationLongitude: number;
        locationLatitude: number;
        region: string;
        city: string;
        punktAdminId: string;
        couriers: string[];
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    update(id: number, updateUserPunktDto: UpdateUserPunktDto): string;
    remove(id: number): string;
}
