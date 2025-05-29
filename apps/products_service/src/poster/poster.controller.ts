import {
  Controller,
  Post,
  Get,
  Param,
  Patch,
  Delete,
  Body,
  UseInterceptors,
  UploadedFile,
} from "@nestjs/common";
import { PosterService } from "./poster.service";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller("poster")
export class PosterController {
  constructor(private readonly posterService: PosterService) {}

  @Post()
  @UseInterceptors(FileInterceptor("img"))
  create(@Body() data: any, @UploadedFile() file: Express.Multer.File) {
    return this.posterService.create(data.title, file);
  }

  @Get()
  findAll() {
    return this.posterService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.posterService.findOne(id);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.posterService.remove(id);
  }
}
