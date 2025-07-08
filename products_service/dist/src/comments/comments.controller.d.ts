import { CommentsService } from "./comments.service";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { UpdateCommentDto } from "./dto/update-comment.dto";
import { Request } from "express";
export declare class CommentsController {
    private readonly commentsService;
    constructor(commentsService: CommentsService);
    create(data: CreateCommentDto, file: Express.Multer.File, req: Request): Promise<{
        id: string;
        title: string;
        sent_person: string;
        image: string | null;
        stars: number;
        replyMessage: string | null;
        createdAt: Date;
        updatedAt: Date;
        productId: string;
    }>;
    findAll(req: Request): Promise<{
        id: string;
        title: string;
        sent_person: string;
        image: string | null;
        stars: number;
        replyMessage: string | null;
        createdAt: Date;
        updatedAt: Date;
        productId: string;
    }[]>;
    getPendingComments(req: Request): Promise<({
        product_images: {
            id: string;
            productId: string;
            imageUrl: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        product_name: string;
        description: string;
        oldPrice: number;
        price: number;
        quantity: number;
        color: string[];
        filters: import("@prisma/client/runtime/library").JsonValue;
        ordered: string[];
        categoryId: string;
        brandId: string;
        product_status: import("@prisma/client").$Enums.ProductStatus;
    })[]>;
    findOne(id: string): Promise<{
        id: string;
        title: string;
        sent_person: string;
        image: string | null;
        stars: number;
        replyMessage: string | null;
        createdAt: Date;
        updatedAt: Date;
        productId: string;
    }>;
    update(id: string, updateCommentDto: UpdateCommentDto, req: Request): Promise<{
        id: string;
        title: string;
        sent_person: string;
        image: string | null;
        stars: number;
        replyMessage: string | null;
        createdAt: Date;
        updatedAt: Date;
        productId: string;
    } | {
        message: string;
    }>;
    remove(id: string, req: Request): Promise<{
        id: string;
        title: string;
        sent_person: string;
        image: string | null;
        stars: number;
        replyMessage: string | null;
        createdAt: Date;
        updatedAt: Date;
        productId: string;
    } | {
        message: string;
    }>;
}
