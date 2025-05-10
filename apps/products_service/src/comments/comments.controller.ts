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

@Controller("comments")
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  create(@Body() createCommentDto: CreateCommentDto, @Req() req: Request) {
    return this.commentsService.create(createCommentDto, req);
  }

  @Get()
  findAll() {
    return this.commentsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.commentsService.findOne(id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateCommentDto: UpdateCommentDto,
    @Req() req: Request
  ) {
    return this.commentsService.update(id, updateCommentDto, req);
  }

  @Delete(":id")
  remove(@Param("id") id: string, @Req() req: Request) {
    return this.commentsService.remove(id, req);
  }
}
