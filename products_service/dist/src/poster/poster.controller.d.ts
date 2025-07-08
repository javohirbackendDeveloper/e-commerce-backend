import { PosterService } from "./poster.service";
declare class CreatePosterDto {
    title: string;
}
export declare class PosterController {
    private readonly posterService;
    constructor(posterService: PosterService);
    create(data: CreatePosterDto, file: Express.Multer.File): Promise<{
        id: string;
        title: string;
        img: string;
        sectionId: string | null;
    }>;
    findAll(): Promise<{
        id: string;
        title: string;
        img: string;
        sectionId: string | null;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        title: string;
        img: string;
        sectionId: string | null;
    }>;
    remove(id: string): Promise<{
        id: string;
        title: string;
        img: string;
        sectionId: string | null;
    }>;
}
export {};
