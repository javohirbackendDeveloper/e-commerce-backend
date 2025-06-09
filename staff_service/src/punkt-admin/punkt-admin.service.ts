import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreatePunktAdminDto } from "./dto/create-punkt-admin.dto";
import { UpdatePunktAdminDto } from "./dto/update-punkt-admin.dto";
import { PrismaService } from "apps/staff_service/prisma/prisma.service";
import { PunktAdmin } from "apps/staff_service/generated/prisma";

@Injectable()
export class PunktAdminService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createPunktAdminDto: CreatePunktAdminDto) {
    const {} = createPunktAdminDto;

    const punktAdmin = await this.prismaService.punktAdmin.create({
      data: { ...createPunktAdminDto },
    });

    return punktAdmin;
  }

  findAll() {
    return `This action returns all punktAdmin`;
  }

  async findOne(id: string): Promise<PunktAdmin> {
    try {
      const punktAdmin = await this.prismaService.punktAdmin.findUnique({
        where: { id },
      });

      return punktAdmin;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server error",
        err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async update(
    id: string,
    updatePunktAdminDto: UpdatePunktAdminDto
  ): Promise<PunktAdmin> {
    try {
      console.log(id, updatePunktAdminDto);

      const punktAdmin = await this.prismaService.punktAdmin.update({
        where: { id },
        data: {
          ...updatePunktAdminDto,
        },
      });

      return punktAdmin;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server error",
        err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  remove(id: number) {
    return `This action removes a #${id} punktAdmin`;
  }
}
