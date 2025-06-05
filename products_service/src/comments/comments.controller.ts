import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
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
} from "@nestjs/swagger";

@ApiTags("products_service/comments")
@Controller("comments")
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  @ApiOperation({ summary: "Yangi kommentariya yaratish" })
  @ApiBody({ type: CreateCommentDto })
  @ApiResponse({ status: 201, description: "Kommentariya yaratildi" })
  create(@Body() createCommentDto: CreateCommentDto, @Req() req: Request) {
    return this.commentsService.create(createCommentDto, req);
  }

  @Get()
  @ApiOperation({ summary: "Barcha kommentariyalarni olish" })
  @ApiResponse({ status: 200, description: "Kommentariyalar ro'yxati" })
  findAll() {
    return this.commentsService.findAll();
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
