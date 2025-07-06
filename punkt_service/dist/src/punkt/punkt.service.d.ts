import { CreatePunktDto } from "./dto/create-punkt.dto";
import { UpdatePunktDto } from "./dto/update-punkt.dto";
import { ClientProxy } from "@nestjs/microservices";
import { PrismaService } from "prisma/prisma.service";
import { Punkt } from "@prisma/client";
import { HttpService } from "@nestjs/axios";
export declare class PunktService {
    private readonly punktClient;
    private readonly staffClient;
    private readonly punktbotClient;
    private readonly prismaService;
    private readonly httpService;
    constructor(punktClient: ClientProxy, staffClient: ClientProxy, punktbotClient: ClientProxy, prismaService: PrismaService, httpService: HttpService);
    create(createPunktDto: CreatePunktDto): Promise<Punkt>;
    private findTextOfLocation;
    findAll(): Promise<Punkt[]>;
    findOne(id: string): Promise<Punkt>;
    update(id: string, updatePunktDto: UpdatePunktDto): string;
    remove(id: string): string;
    getAppliedPunkts(): Promise<any>;
    getRepairingPunkts(): Promise<any>;
    changeToRepair(punktId: string): Promise<void>;
}
