import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  HttpCode,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { CategoryService } from "./category.service";
import {
  CreateCategoryDto,
  CreateSubCategoryDto,
} from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";
import {
  ApiTags,
  ApiOperation,
  ApiBody,
  ApiResponse,
  ApiParam,
} from "@nestjs/swagger";
import { FileInterceptor } from "@nestjs/platform-express";

@ApiTags("products_service/category")
@Controller("category")
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  @UseInterceptors(FileInterceptor("icon"))
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: "Create a new category" })
  @ApiBody({ type: CreateCategoryDto })
  @ApiResponse({ status: 201, description: "Kategoriya yaratildi" })
  create(
    @UploadedFile() file: Express.Multer.File,
    @Body() createCategoryDto: CreateCategoryDto
  ) {
    return this.categoryService.create(createCategoryDto, file);
  }
  @Post("createSubCategory")
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: "Create a sub categorycategory" })
  @ApiBody({ type: CreateSubCategoryDto })
  @ApiResponse({ status: 201, description: "Kategoriya yaratildi" })
  createSubCategory(@Body() createSubCategoryDto: CreateSubCategoryDto) {
    return this.categoryService.createSubCategory(createSubCategoryDto);
  }

  @Get("findAll")
  @ApiOperation({ summary: "Get all categories including subcategories" })
  @ApiResponse({
    status: 200,
    description: "Barcha kategoriyalar",
    type: [CreateCategoryDto],
  })
  findAll() {
    return this.categoryService.findAll();
  }

  @Get("getLeafCategories")
  @ApiOperation({ summary: "Get all leaf subcategories" })
  @ApiResponse({
    status: 200,
    description: "Barcha eng pastki bosqich kategoriyalar",
    type: [CreateCategoryDto],
  })
  getAllLeafCategories() {
    return this.categoryService.getAllLeafCategories();
  }

  @Get()
  @ApiOperation({ summary: "Get all parent categories (root categories only)" })
  @ApiResponse({
    status: 200,
    description: "Faqat ota kategoriyalar",
    type: [CreateCategoryDto],
  })
  findAllParentCats() {
    return this.categoryService.findAllParentCats();
  }

  @Get(":id")
  @ApiOperation({ summary: "Get a single category by ID" })
  @ApiParam({ name: "id", description: "Kategoriya ID" })
  @ApiResponse({
    status: 200,
    description: "Topilgan kategoriya",
    type: CreateCategoryDto,
  })
  findOne(@Param("id") id: string) {
    return this.categoryService.findOne(id);
  }

  @Patch(":id")
  @UseInterceptors(FileInterceptor("icon"))
  @ApiOperation({ summary: "Update a category" })
  @ApiParam({ name: "id", description: "Kategoriya ID" })
  @ApiBody({ type: UpdateCategoryDto })
  @ApiResponse({
    status: 200,
    description: "Kategoriya yangilandi",
  })
  update(
    @Param("id") id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
    @UploadedFile() file: Express.Multer.File
  ) {
    return this.categoryService.update(id, updateCategoryDto, file);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Delete a category" })
  @ApiParam({ name: "id", description: "Kategoriya ID" })
  @ApiResponse({
    status: 200,
    description: "Kategoriya o‘chirildi",
  })
  remove(@Param("id") id: string) {
    console.log({ id }, "Id came");

    return this.categoryService.remove(id);
  }

  @Get("findAllChildCategories/:id")
  @ApiOperation({ summary: "Get all parent categories (root categories only)" })
  @ApiResponse({
    status: 200,
    description: "Shu parent categoryni ikkinchi darajali kategoriyalari",
    type: [CreateCategoryDto],
  })
  findAllChildCatsByParentid(@Param("id") id: string) {
    return this.categoryService.getAllChildCategories(id);
  }
}
