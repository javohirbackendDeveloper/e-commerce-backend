import { AppliesService } from "./applies.service";
export declare class AppliesController {
    private readonly appliesService;
    constructor(appliesService: AppliesService);
    getAppliedPunkts(): Promise<{
        id: string;
        name: string;
        phone_number: string;
        longitude: number;
        latitude: number;
        province: string;
        city: string;
        telegram_username: string;
        status: import("@prisma/client").$Enums.AppliedPunktEnum;
    }[]>;
    getRepairingPunkts(): Promise<{
        id: string;
        name: string;
        phone_number: string;
        longitude: number;
        latitude: number;
        province: string;
        city: string;
        telegram_username: string;
        status: import("@prisma/client").$Enums.AppliedPunktEnum;
    }[]>;
    get_one_repairing_punkt(id: string): Promise<{
        id: string;
        name: string;
        phone_number: string;
        longitude: number;
        latitude: number;
        province: string;
        city: string;
        telegram_username: string;
        status: import("@prisma/client").$Enums.AppliedPunktEnum;
    }>;
    changeToRepair(punktId: string): Promise<{
        id: string;
        name: string;
        phone_number: string;
        longitude: number;
        latitude: number;
        province: string;
        city: string;
        telegram_username: string;
        status: import("@prisma/client").$Enums.AppliedPunktEnum;
    }>;
    deletePunkt(punktId: string): Promise<{
        id: string;
        name: string;
        phone_number: string;
        longitude: number;
        latitude: number;
        province: string;
        city: string;
        telegram_username: string;
        status: import("@prisma/client").$Enums.AppliedPunktEnum;
    }>;
}
