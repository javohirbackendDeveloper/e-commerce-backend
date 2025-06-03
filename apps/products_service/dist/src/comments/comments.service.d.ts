import { CreateCommentDto } from "./dto/create-comment.dto";
import { UpdateCommentDto } from "./dto/update-comment.dto";
import { PrismaService } from "prisma/prisma.service";
import { Request } from "express";
export declare class CommentsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createCommentDto: CreateCommentDto, req: Request): Promise<{
        title: string;
        image: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        productId: string;
        sent_person: string;
        stars: number;
        replyMessage: string | null;
    }>;
    findAll(): Promise<{
        title: string;
        image: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        productId: string;
        sent_person: string;
        stars: number;
        replyMessage: string | null;
    }[]>;
    findOne(id: string): Promise<{
        title: string;
        image: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        productId: string;
        sent_person: string;
        stars: number;
        replyMessage: string | null;
    }>;
    update(id: string, updateCommentDto: UpdateCommentDto, req: Request): Promise<{
        title: string;
        image: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        productId: string;
        sent_person: string;
        stars: number;
        replyMessage: string | null;
    } | {
        message: string;
    }>;
    remove(id: string, req: Request): Promise<{
        title: string;
        image: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        productId: string;
        sent_person: string;
        stars: number;
        replyMessage: string | null;
    } | {
        message: string;
    }>;
}
