import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateCityDto, CreateProvinceDto } from "./dto/create-location.dto";
import { UpdateLocationDto } from "./dto/update-location.dto";
import { PrismaService } from "prisma/prisma.service";

@Injectable()
export class LocationService {
  constructor(private readonly prismaService: PrismaService) {}

  // PROVINCE

  async create(createProvinceDto: CreateProvinceDto) {
    try {
      console.log("request came to locations controller ", {
        createProvinceDto,
      });

      const { title } = createProvinceDto;

      const existProvince = await this.prismaService.province.findUnique({
        where: { title },
      });

      if (existProvince) {
        throw new HttpException(
          "This province already exist",
          HttpStatus.CONFLICT
        );
      }

      const createdProvince = await this.prismaService.province.create({
        data: { title },
      });

      console.log({ createdProvince });

      return createdProvince;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server error",
        err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async findAll() {
    const provinces = await this.prismaService.province.findMany({
      include: {
        cities: true,
      },
    });

    return provinces;
  }

  async findOne(id: string) {
    const province = await this.prismaService.province.findUnique({
      where: { id },
      include: {
        cities: true,
      },
    });

    return province;
  }

  async update(id: string, updateLocationDto: UpdateLocationDto) {
    try {
      const updatedProvince = await this.prismaService.province.update({
        where: { id },
        data: {
          ...updateLocationDto,
        },
      });

      return updatedProvince;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server error",
        err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async remove(id: string) {
    try {
      const provinceCities = await this.prismaService.city.findMany({
        where: {
          parenProvinceId: id,
        },
        select: {
          id: true,
        },
      });

      provinceCities.forEach(async (item) => {
        await this.prismaService.city.delete({
          where: { id: item.id },
        });
      });

      const deletedProvince = await this.prismaService.province.delete({
        where: { id },
      });

      return deletedProvince;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server error",
        err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  // CITY

  async createCity(createCityDto: CreateCityDto) {
    try {
      const { title, parenProvinceId } = createCityDto;

      const existProvince = await this.prismaService.province.findUnique({
        where: { id: parenProvinceId },
      });

      if (!existProvince) {
        throw new HttpException(
          "This province not found",
          HttpStatus.NOT_FOUND
        );
      }

      const existCity = await this.prismaService.city.findFirst({
        where: {
          parenProvinceId,
          title,
        },
      });

      if (existCity) {
        throw new HttpException("This city already exist", HttpStatus.CONFLICT);
      }
      const createdCity = await this.prismaService.city.create({
        data: { title, parenProvinceId },
      });

      return createdCity;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server error",
        err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async removeCity(id: string) {
    try {
      const deletedCity = await this.prismaService.city.delete({
        where: { id },
      });

      return deletedCity;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server error",
        err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async findAllCitiesByProvince(provinceId: string) {
    const cities = await this.prismaService.city.findMany({
      where: { parenProvinceId: provinceId },
    });

    return cities;
  }
}
