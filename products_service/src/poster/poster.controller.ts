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
  Req,
} from "@nestjs/common";
import { PosterService } from "./poster.service";
import { FileInterceptor } from "@nestjs/platform-express";
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiConsumes,
  ApiBody,
  ApiParam,
} from "@nestjs/swagger";

class CreatePosterDto {
  title: string;
}

@ApiTags("poster")
@Controller("poster")
export class PosterController {
  constructor(private readonly posterService: PosterService) {}

  @Post()
  @UseInterceptors(FileInterceptor("img"))
  @ApiOperation({ summary: "Yangi poster yaratish" })
  @ApiConsumes("multipart/form-data")
  @ApiBody({
    description: "Poster ma'lumotlari va rasm fayli",
    schema: {
      type: "object",
      properties: {
        title: { type: "string" },
        img: {
          type: "string",
          format: "binary",
        },
      },
      required: ["title", "img"],
    },
  })
  @ApiResponse({ status: 201, description: "Poster muvaffaqiyatli yaratildi" })
  create(@Req() req: Request, @UploadedFile() file: Express.Multer.File) {
    console.log({ data: (req.body as any).title, messa: "request" });

    return this.posterService.create((req.body as any).title, file);
  }

  @Get()
  @ApiOperation({ summary: "Barcha posterlarni olish" })
  @ApiResponse({ status: 200, description: "Posterlar ro'yxati" })
  findAll() {
    return this.posterService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "ID bo'yicha posterni olish" })
  @ApiParam({ name: "id", description: "Poster ID" })
  @ApiResponse({ status: 200, description: "Poster ma'lumotlari" })
  findOne(@Param("id") id: string) {
    return this.posterService.findOne(id);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Posterni o'chirish" })
  @ApiParam({ name: "id", description: "Poster ID" })
  @ApiResponse({ status: 200, description: "Poster o'chirildi" })
  remove(@Param("id") id: string) {
    return this.posterService.remove(id);
  }
}
