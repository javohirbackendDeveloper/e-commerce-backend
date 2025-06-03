import { CreateCommentDto } from "./dto/create-comment.dto";
import { UpdateCommentDto } from "./dto/update-comment.dto";
import { PrismaService } from "prisma/prisma.service";
import { Request } from "express";
export declare class CommentsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createCommentDto: CreateCommentDto, req: Request): Promise<{
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        productId: string;
        sent_person: string;
        image: string | null;
        stars: number;
        replyMessage: string | null;
    }>;
    findAll(): Promise<{
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        productId: string;
        sent_person: string;
        image: string | null;
        stars: number;
        replyMessage: string | null;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        productId: string;
        sent_person: string;
        image: string | null;
        stars: number;
        replyMessage: string | null;
    }>;
    update(id: string, updateCommentDto: UpdateCommentDto, req: Request): Promise<{
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        productId: string;
        sent_person: string;
        image: string | null;
        stars: number;
        replyMessage: string | null;
    } | {
        message: string;
    }>;
    remove(id: string, req: Request): Promise<{
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        productId: string;
        sent_person: string;
        image: string | null;
        stars: number;
        replyMessage: string | null;
    } | {
        message: string;
    }>;
}
