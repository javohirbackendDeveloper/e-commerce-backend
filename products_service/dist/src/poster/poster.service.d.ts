import { CloudinaryService } from "../cloudinary/cloudinary.service";
import { PrismaService } from "prisma/prisma.service";
export declare class PosterService {
    private readonly cloudinary;
    private prisma;
    constructor(cloudinary: CloudinaryService, prisma: PrismaService);
    create(title: string, img: Express.Multer.File): Promise<{
        title: string;
        id: string;
        img: string;
        sectionId: string | null;
    }>;
    findAll(): Promise<{
        title: string;
        id: string;
        img: string;
        sectionId: string | null;
    }[]>;
    findOne(id: string): Promise<{
        title: string;
        id: string;
        img: string;
        sectionId: string | null;
    }>;
    remove(id: string): Promise<{
        title: string;
        id: string;
        img: string;
        sectionId: string | null;
    }>;
}
