import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { CommentsService } from "./comments.service";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { UpdateCommentDto } from "./dto/update-comment.dto";
import { Request } from "express";
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiParam,
  ApiConsumes,
} from "@nestjs/swagger";
import { FileInterceptor } from "@nestjs/platform-express";

@ApiTags("products_service/comments")
@Controller("comments")
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  @UseInterceptors(FileInterceptor("image"))
  @ApiConsumes("multipart/form-data")
  @ApiOperation({ summary: "Yangi kommentariya yaratish" })
  @ApiBody({ type: CreateCommentDto })
  @ApiResponse({ status: 201, description: "Kommentariya yaratildi" })
  create(
    @Body() data: CreateCommentDto,
    @UploadedFile() file: Express.Multer.File,
    @Req() req: Request
  ) {
    return this.commentsService.create(data, file, req);
  }

  @Get()
  @ApiOperation({ summary: "Barcha kommentariyalarni olish" })
  @ApiResponse({ status: 200, description: "Kommentariyalar ro'yxati" })
  findAll(@Req() req: Request) {
    return this.commentsService.findAll(req);
  }
  @Get("getPendingComments")
  @ApiOperation({ summary: "Barcha kutayotgan kommentariyalarni olish" })
  @ApiResponse({
    status: 200,
    description: "Kutayotgan kommentariyalar ro'yxati",
  })
  getPendingComments(@Req() req: Request) {
    return this.commentsService.getPendingComments(req);
  }

  @Get(":id")
  @ApiOperation({ summary: "ID bo'yicha kommentariyani olish" })
  @ApiParam({ name: "id", description: "Kommentariya ID" })
  @ApiResponse({ status: 200, description: "Kommentariya ma'lumotlari" })
  findOne(@Param("id") id: string) {
    return this.commentsService.findOne(id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Kommentariyani yangilash" })
  @ApiParam({ name: "id", description: "Kommentariya ID" })
  @ApiBody({ type: UpdateCommentDto })
  @ApiResponse({ status: 200, description: "Kommentariya yangilandi" })
  update(
    @Param("id") id: string,
    @Body() updateCommentDto: UpdateCommentDto,
    @Req() req: Request
  ) {
    return this.commentsService.update(id, updateCommentDto, req);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Kommentariyani o‘chirish" })
  @ApiParam({ name: "id", description: "Kommentariya ID" })
  @ApiResponse({ status: 200, description: "Kommentariya o‘chirildi" })
  remove(@Param("id") id: string, @Req() req: Request) {
    return this.commentsService.remove(id, req);
  }
}
