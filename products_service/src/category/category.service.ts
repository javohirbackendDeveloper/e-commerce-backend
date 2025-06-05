import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import {
  CreateCategoryDto,
  CreateSubCategoryDto,
} from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";
import { PrismaService } from "prisma/prisma.service";
import { Category } from "@prisma/client";
import { CloudinaryService } from "../cloudinary/cloudinary.service";
import { ReturnParentWithSubDto } from "./dto/return.dto";

@Injectable()
export class CategoryService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly cloudinaryService: CloudinaryService
  ) {}

  async createSubCategory(createSubCategoryDto: CreateSubCategoryDto) {
    try {
      const { title, parentId } = createSubCategoryDto;

      const existTitle = await this.prismaService.category.findUnique({
        where: { title },
      });

      if (existTitle) {
        throw new HttpException(
          "This  category title already exist",
          HttpStatus.BAD_REQUEST
        );
      }

      const parentCat = await this.prismaService.category.findUnique({
        where: { id: parentId },
      });

      if (!parentCat) {
        throw new HttpException(
          "This parent category not found with this id " + parentId,
          HttpStatus.NOT_FOUND
        );
      }

      const subcategory = await this.prismaService.category.create({
        data: { title, parentId },
      });

      await this.prismaService.category.update({
        where: { id: parentCat.id },
        data: {
          children: parentCat.children + 1,
        },
      });
      return subcategory;
    } catch (err) {
      console.log(err);

      throw new HttpException(
        err.message,
        err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async create(
    createCategoryDto: CreateCategoryDto,
    file: Express.Multer.File
  ): Promise<CreateCategoryDto> {
    try {
      const { title } = createCategoryDto;

      let parentCategory: Category | null = null;

      const existTitle = await this.prismaService.category.findUnique({
        where: { title },
      });

      if (existTitle) {
        throw new HttpException(
          "This  category title already exist",
          HttpStatus.BAD_REQUEST
        );
      }

      if (!file) {
        throw new HttpException(
          "Please upload icon to add category",
          HttpStatus.BAD_REQUEST
        );
      }

      const iconUrl = await this.cloudinaryService.uploadFile(
        file,
        "categories"
      );

      const category = await this.prismaService.category.create({
        data: {
          title,
          icon: iconUrl || "",
          parentId: "",
        },
      });

      return category;
    } catch (error) {
      console.log(error);

      throw new HttpException(
        error.message || "Internal server error",
        error.status || 500
      );
    }
  }

  async findAll(): Promise<Category[]> {
    try {
      const categories = await this.prismaService.category.findMany();

      return categories;
    } catch (error) {
      throw new HttpException(
        error.message || "Internal server error",
        error.status || 500
      );
    }
  }

  async findAllParentCats(): Promise<Category[]> {
    try {
      const categories = await this.prismaService.category.findMany({
        where: { parentId: "" },
      });

      return categories;
    } catch (error) {
      throw new HttpException(
        error.message || "Internal server error",
        error.status || 500
      );
    }
  }

  async findAllParentsWithSubCats(): Promise<ReturnParentWithSubDto[]> {
    try {
      const categories = await this.prismaService.category.findMany({
        where: { parentId: "" },
      });

      const returntData = Promise.all(
        categories.map(async (cat) => {
          const subCategories = await this.getAllChildCategories(cat.id);
          return {
            id: cat.id,
            parentId: cat.parentId,
            icon: cat.icon,
            title: cat.title,
            children: cat.children,
            subCategories,
          };
        })
      );
      return returntData;
    } catch (error) {
      console.log({ error });

      throw new HttpException(
        error.message || "Internal server error",
        error.status || 500
      );
    }
  }
  async findOne(id: string): Promise<Category> {
    try {
      const category = await this.prismaService.category.findUnique({
        where: { id },
      });

      return category;
    } catch (error) {
      throw new HttpException(
        error.message || "Internal server error",
        error.status || 500
      );
    }
  }

  async update(
    id: string,
    updateCategoryDto: UpdateCategoryDto,
    file: Express.Multer.File
  ): Promise<CreateCategoryDto> {
    const { title } = updateCategoryDto;
    try {
      const existCategory = await this.prismaService.category.findUnique({
        where: { id },
      });

      if (!existCategory) {
        throw new HttpException(
          "This category not found with this id " + id,
          HttpStatus.NOT_FOUND
        );
      }

      let iconUrl: string = existCategory.icon;
      if (file) {
        await this.cloudinaryService.deleteImage(existCategory.icon);
        iconUrl = await this.cloudinaryService.uploadFile(file, "categories");
      }
      const category = await this.prismaService.category.update({
        where: { id },
        data: { title, icon: iconUrl || "" },
      });
      return category;
    } catch (error) {
      throw new HttpException(
        error.message || "Internal server error",
        error.status || 500
      );
    }
  }

  // recursive delete function
  async remove(id: string) {
    try {
      // DELETING ICON OF THIS CATEGORY FROM CLOUDINARY

      const category = await this.prismaService.category.findUnique({
        where: { id },
      });
      if (!category) {
        throw new HttpException(
          "This category not found with this is " + id,
          HttpStatus.NOT_FOUND
        );
      }

      if (category.icon) {
        await this.cloudinaryService.deleteImage(category.icon);
      }

      // deleting sub categories
      const categories = await this.prismaService.category.findMany({
        where: { parentId: id },
      });

      for (const category of categories) {
        await this.remove(category.id);
      }

      await this.prismaService.category.delete({
        where: { id },
      });

      if (category.parentId) {
        await this.prismaService.category.update({
          where: { id: category.parentId },
          data: {
            children: {
              decrement: 1,
            },
          },
        });
      }
      return { message: "Turkum muvaffaqiyatli o'chirildi" };
    } catch (error) {
      console.log({ error });

      throw new HttpException(
        error.message || "Internal server error",
        error.status || 500
      );
    }
  }

  // recursive get function

  async getAllChildCategories(categoryId: string): Promise<Category[]> {
    try {
      const categories = await this.prismaService.category.findMany({
        where: { parentId: categoryId },
      });

      return categories;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server error",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  // recursive get child category ids
  async getAllChildCategoryIds(categoryId: string): Promise<string[]> {
    try {
      const directChildren = await this.prismaService.category.findMany({
        where: { parentId: categoryId },
      });

      if (!directChildren.length) return [categoryId];

      const allDescendants = await Promise.all(
        directChildren.map((child) => this.getAllChildCategoryIds(child.id))
      );

      return [categoryId, ...allDescendants.flat()];
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server error",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  // getAll leaf categories

  async getAllLeafCategories(): Promise<Category[]> {
    try {
      const categories = await this.prismaService.category.findMany({
        where: {
          children: {
            equals: 0,
          },
        },
      });

      return categories;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server error",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async getAllSecondCategories(): Promise<Category[]> {
    try {
      const parentCategoryIds = (await this.findAllParentCats()).map(
        (cat) => cat.id
      );
      const categories = await this.prismaService.category.findMany({
        where: {
          parentId: { in: parentCategoryIds },
        },
      });

      return categories;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server error",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
