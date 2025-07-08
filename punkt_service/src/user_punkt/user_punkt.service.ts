import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateUserPunktDto } from "./dto/create-user_punkt.dto";
import { UpdateUserPunktDto } from "./dto/update-user_punkt.dto";
import { PrismaService } from "prisma/prisma.service";

@Injectable()
export class UserPunktService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createUserPunktDto: CreateUserPunktDto) {
    return "This action adds a new userPunkt";
  }

  async findAllPunktCities() {
    try {
      const punkts = await this.prismaService.punkt.findMany({
        select: {
          city: true,
        },
      });

      const uniqueCities = [];

      punkts.forEach((punkt) => {
        if (!uniqueCities.includes(punkt.city)) {
          uniqueCities.push(punkt.city);
        }
      });

      return uniqueCities;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server errror",
        err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async findByCity(cityName: string) {
    try {
      const punkts = await this.prismaService.punkt.findMany({
        where: { city: cityName },
        include: {
          workingHours: true,
        },
      });

      return punkts;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server errror",
        err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  update(id: number, updateUserPunktDto: UpdateUserPunktDto) {
    return `This action updates a #${id} userPunkt`;
  }

  remove(id: number) {
    return `This action removes a #${id} userPunkt`;
  }
}
