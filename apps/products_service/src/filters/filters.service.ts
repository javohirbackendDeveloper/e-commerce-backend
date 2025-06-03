import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import {
  CreateFilterValue,
  CreateGeneralFilterDto,
  CreateSpecificFilterDto,
} from "./dto/create-filter.dto";
import { UpdateFilterDto } from "./dto/update-filter.dto";
import { PrismaService } from "prisma/prisma.service";
import { FilterType, FilterValues } from "@prisma/client";
import { ReturnSpecificFunction } from "./dto/return.dto";
import { CategoryService } from "../category/category.service";

@Injectable()
export class FiltersService {
  constructor(
    private readonly categoryService: CategoryService,
    private readonly prismaService: PrismaService
  ) {}
  // GENERAL FILTERS

  async create(
    createGeneralFilterDto: CreateGeneralFilterDto
  ): Promise<FilterType> {
    try {
      const { title, inputType, type } = createGeneralFilterDto;

      const existTitle = await this.prismaService.filterType.findUnique({
        where: { title },
      });

      if (existTitle) {
        throw new HttpException(
          "This filter title already exists",
          HttpStatus.BAD_REQUEST
        );
      }

      const filter = await this.prismaService.filterType.create({
        data: { title, inputType, type: type || "GENERAL" },
      });
      return filter;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server error",
        err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async findAll(): Promise<FilterType[]> {
    try {
      const generalFilters = await this.prismaService.filterType.findMany({
        where: { type: "GENERAL" },
        include: {
          values: true,
        },
      });

      return generalFilters;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server error",
        err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async findOne(id: string) {
    try {
      const filter = await this.prismaService.filterType.findUnique({
        where: { id },
        include: {
          values: true,
          filterCategory: true,
        },
      });

      return filter;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server error",
        err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async update(
    id: string,
    updateFilterDto: UpdateFilterDto
  ): Promise<FilterType> {
    try {
      const filter = await this.prismaService.filterType.update({
        where: { id },
        data: { ...updateFilterDto },
      });

      return filter;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server error",
        err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async remove(id: string): Promise<FilterType> {
    try {
      const filter = await this.prismaService.filterType.delete({
        where: { id },
      });

      return filter;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server error",
        err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  // SPECIFIC FILTERS

  async getFiltersByCategoryId(categoryId: string) {
    try {
      const childrenCategoryIds =
        await this.categoryService.getAllChildCategoryIds(categoryId);
      const categoryFilters = await this.prismaService.filterCategory.findMany({
        where: {
          categoryId: {
            in: childrenCategoryIds,
          },
        },
        include: {
          filter: {
            include: { values: true },
          },
        },
      });

      const availableFilters = categoryFilters.filter(
        (item) => item.filter.values.length > 0
      );

      return availableFilters;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server err",
        err.status || 500
      );
    }
  }
  async createSpecificFilter(
    createGeneralFilterDto: CreateSpecificFilterDto
  ): Promise<ReturnSpecificFunction> {
    try {
      const { title, inputType, type, categoryIds } = createGeneralFilterDto;

      const existTitle = await this.prismaService.filterType.findUnique({
        where: { title },
      });

      if (existTitle) {
        throw new HttpException(
          "This filter title already exists",
          HttpStatus.BAD_REQUEST
        );
      }

      const filter = await this.prismaService.filterType.create({
        data: { title, inputType, type: type || "GENERAL" },
      });

      const createdFilterCategories = [];

      for (const catId of categoryIds) {
        const existFilterCategory =
          await this.prismaService.filterCategory.findUnique({
            where: {
              categoryId_filterId: { filterId: filter.id, categoryId: catId },
            },
          });

        if (!existFilterCategory) {
          const createdResponse =
            await this.prismaService.filterCategory.create({
              data: {
                categoryId: catId,
                filterId: filter.id,
              },
            });

          createdFilterCategories.push(createdResponse);
        }
      }
      return { filter, createdFilterCategories };
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server error",
        err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async findAllSpecific(): Promise<FilterType[]> {
    try {
      const specificFilters = await this.prismaService.filterType.findMany({
        where: { type: "SPECIFIC" },
        include: {
          filterCategory: {
            include: { category: true },
          },
        },
      });

      return specificFilters;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server error",
        err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async removeSpecificFilter(id: string): Promise<FilterType> {
    try {
      const filterValues = await this.prismaService.filterValues.deleteMany({
        where: { filterId: id },
      });
      const filterCategories =
        await this.prismaService.filterCategory.deleteMany({
          where: { filterId: id },
        });
      const filter = await this.prismaService.filterType.delete({
        where: { id },
      });

      return filter;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server error",
        err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
  // filter values

  async createValue(createValue: CreateFilterValue): Promise<FilterValues[]> {
    try {
      const { filterId, value } = createValue;

      const filterPrevValues = await this.prismaService.filterValues.findMany({
        where: { filterId },
      });

      const onlyPrevValues = filterPrevValues.map((item) => item.value);

      const createdValues = [];

      for (const v of value) {
        if (!onlyPrevValues.includes(v)) {
          const createdValue = await this.prismaService.filterValues.create({
            data: { filterId, value: v },
          });

          createdValues.push(createdValue);
        }
      }

      return createdValues;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server error",
        err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async deleteValue(id: string): Promise<FilterValues> {
    try {
      const deletedValue = await this.prismaService.filterValues.delete({
        where: {
          id,
        },
      });

      return deletedValue;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server error",
        err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
