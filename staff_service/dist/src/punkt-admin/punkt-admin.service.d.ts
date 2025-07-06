import { CreatePunktAdminDto } from "./dto/create-punkt-admin.dto";
import { UpdatePunktAdminDto } from "./dto/update-punkt-admin.dto";
import { PrismaService } from "../../prisma/prisma.service";
import { PunktAdmin } from "@prisma/client";
export declare class PunktAdminService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
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
    findAll(): string;
    findOne(id: string): Promise<PunktAdmin>;
    update(id: string, updatePunktAdminDto: UpdatePunktAdminDto): Promise<PunktAdmin>;
    remove(id: number): string;
}
