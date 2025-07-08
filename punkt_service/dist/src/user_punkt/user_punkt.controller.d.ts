import { UserPunktService } from "./user_punkt.service";
import { CreateUserPunktDto } from "./dto/create-user_punkt.dto";
import { UpdateUserPunktDto } from "./dto/update-user_punkt.dto";
export declare class UserPunktController {
    private readonly userPunktService;
    constructor(userPunktService: UserPunktService);
    create(createUserPunktDto: CreateUserPunktDto): string;
    findAllPunktCities(): Promise<any[]>;
    findOne(cityName: string): Promise<({
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
    update(id: string, updateUserPunktDto: UpdateUserPunktDto): string;
    remove(id: string): string;
}
