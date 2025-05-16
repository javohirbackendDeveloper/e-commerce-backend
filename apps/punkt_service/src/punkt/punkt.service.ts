import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { CreatePunktDto } from "./dto/create-punkt.dto";
import { UpdatePunktDto } from "./dto/update-punkt.dto";
import { PrismaService } from "apps/punkt_service/prisma/prisma.service";
import { firstValueFrom } from "rxjs";
import { ClientProxy } from "@nestjs/microservices";
import { Prisma, Punkt } from "apps/punkt_service/generated/prisma";

@Injectable()
export class PunktService {
  constructor(
    @Inject("PUNKT_SERVICE") private readonly punktClient: ClientProxy,
    private readonly prismaService: PrismaService
  ) {}

  async create(createPunktDto: CreatePunktDto): Promise<Punkt> {
    try {
      const { locationLatitude, locationLongitude, punktAdminId } =
        createPunktDto;

      const existPunkt = await this.prismaService.punkt.findFirst({
        where: {
          locationLatitude,
          locationLongitude,
        },
      });

      if (existPunkt) {
        throw new HttpException(
          "This punkt already exist in this zone",
          HttpStatus.CONFLICT
        );
      }

      const punktAdmin = await firstValueFrom(
        this.punktClient.send("get_one_punktAdmin", punktAdminId)
      );

      if (!punktAdmin) {
        throw new HttpException(
          "This punkt admin not found with this id " + punktAdminId,
          HttpStatus.NOT_FOUND
        );
      }

      if (punktAdmin.punktId) {
        throw new HttpException(
          "This punkt admin working other punkt",
          HttpStatus.CONFLICT
        );
      }

      const punkt = await this.prismaService.punkt.create({
        data: {
          ...createPunktDto,
          workingHours: createPunktDto.workingHours as Prisma.JsonObject,
        },
      });

      const updatePunktAdmin = await firstValueFrom(
        this.punktClient.send("update_one_punktAdmin", {
          id: punktAdmin.id,
          data: {
            punktId: punkt.id,
          },
        })
      );

      return punkt;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server errror",
        err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async findAll(): Promise<Punkt[]> {
    try {
      const allPunkts = await this.prismaService.punkt.findMany();

      return allPunkts;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server errror",
        err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async findOne(id: string): Promise<Punkt> {
    try {
      const punkt = await this.prismaService.punkt.findUnique({
        where: { id },
      });

      return punkt;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server errror",
        err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  update(id: string, updatePunktDto: UpdatePunktDto) {
    return `This action updates a #${id} punkt`;
  }

  remove(id: string) {
    return `This action removes a #${id} punkt`;
  }
}
