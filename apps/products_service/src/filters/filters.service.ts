import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import {
  CreateFilterValue,
  CreateGeneralFilterDto,
} from "./dto/create-filter.dto";
import { UpdateFilterDto } from "./dto/update-filter.dto";
import { PrismaService } from "apps/products_service/prisma/prisma.service";
import {
  FilterType,
  FilterValues,
} from "apps/products_service/generated/prisma";

@Injectable()
export class FiltersService {
  constructor(private readonly prismaService: PrismaService) {}
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
      });

      return generalFilters;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server error",
        err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  findOne(id: string) {
    try {
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
}
