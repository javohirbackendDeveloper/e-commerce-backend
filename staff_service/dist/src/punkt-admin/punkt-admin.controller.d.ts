import { PunktAdminService } from "./punkt-admin.service";
import { CreatePunktAdminDto, EnterAccountDto } from "./dto/create-punkt-admin.dto";
import { UpdatePunktAdminDto } from "./dto/update-punkt-admin.dto";
export declare class PunktAdminController {
    private readonly punktAdminService;
    constructor(punktAdminService: PunktAdminService);
    create(createPunktAdminDto: CreatePunktAdminDto): Promise<{
        id: string;
        username: string;
        punktId: string | null;
        password: string;
        first_name: string | null;
        last_name: string | null;
        phone_number: string;
        role: import("@prisma/client").$Enums.Roles;
    }>;
    enterToAccount(enterAccountDto: EnterAccountDto): Promise<{
        otherData: {
            id: string;
            username: string;
            punktId: string | null;
            first_name: string | null;
            last_name: string | null;
            phone_number: string;
            role: import("@prisma/client").$Enums.Roles;
        };
    }>;
    findAll(): string;
    findOne(id: string): Promise<{
        id: string;
        username: string;
        punktId: string | null;
        password: string;
        first_name: string | null;
        last_name: string | null;
        phone_number: string;
        role: import("@prisma/client").$Enums.Roles;
    }>;
    update(id: string, updatePunktAdminDto: UpdatePunktAdminDto): Promise<{
        id: string;
        username: string;
        punktId: string | null;
        password: string;
        first_name: string | null;
        last_name: string | null;
        phone_number: string;
        role: import("@prisma/client").$Enums.Roles;
    }>;
    remove(id: string): string;
    getOne(id: string): Promise<{
        id: string;
        username: string;
        punktId: string | null;
        password: string;
        first_name: string | null;
        last_name: string | null;
        phone_number: string;
        role: import("@prisma/client").$Enums.Roles;
    }>;
    updateOne(payload: {
        id: string;
        data: UpdatePunktAdminDto;
    }): Promise<{
        id: string;
        username: string;
        punktId: string | null;
        password: string;
        first_name: string | null;
        last_name: string | null;
        phone_number: string;
        role: import("@prisma/client").$Enums.Roles;
    }>;
}
