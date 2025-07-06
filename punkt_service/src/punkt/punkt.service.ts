import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { CreatePunktDto } from "./dto/create-punkt.dto";
import { UpdatePunktDto } from "./dto/update-punkt.dto";
import { firstValueFrom } from "rxjs";
import { ClientProxy } from "@nestjs/microservices";
import { PrismaService } from "prisma/prisma.service";
import { Prisma, Punkt } from "@prisma/client";
import { HttpService } from "@nestjs/axios";
import { Days } from "./enums/days.enum";

@Injectable()
export class PunktService {
  constructor(
    @Inject("PUNKT_SERVICE") private readonly punktClient: ClientProxy,
    @Inject("STAFF_SERVICE") private readonly staffClient: ClientProxy,
    @Inject("PUNKTBOT") private readonly punktbotClient: ClientProxy,
    private readonly prismaService: PrismaService,
    private readonly httpService: HttpService
  ) {}

  async create(createPunktDto: CreatePunktDto): Promise<Punkt> {
    try {
      const { punktAdminId, canTryOn, repairingPunktId, workingHours } =
        createPunktDto;

      const repairingPunkt = await firstValueFrom(
        this.punktbotClient.send("get_one_repairing_punkt", repairingPunktId)
      );

      const { latitude, longitude, province, city } = repairingPunkt;
      const existPunkt = await this.prismaService.punkt.findFirst({
        where: {
          locationLatitude: latitude,
          locationLongitude: longitude,
        },
      });

      if (existPunkt) {
        throw new HttpException(
          "This punkt already exist in this zone",
          HttpStatus.CONFLICT
        );
      }

      const punktAdmin = await firstValueFrom(
        this.staffClient.send("get_one_punktAdmin", punktAdminId)
      );

      if (!punktAdmin) {
        throw new HttpException(
          "This punkt admin not found with this id " + punktAdminId,
          HttpStatus.NOT_FOUND
        );
      }

      if (punktAdmin.punktId) {
        throw new HttpException(
          "This punkt admin working in other punkt",
          HttpStatus.CONFLICT
        );
      }

      const otherPunkts = await this.prismaService.punkt.findMany({
        select: {
          id: true,
        },
      });

      const locationText = await this.findTextOfLocation(latitude, longitude);

      const dataToCreate = {
        name: `${otherPunkts.length + 1}-punkt`,
        city: city,
        region: province,
        canTryOn: canTryOn,
        punktAdminId: punktAdminId,
        locationLatitude: latitude,
        locationLongitude: longitude,
        locationText: locationText,
      };
      const punkt = await this.prismaService.punkt.create({
        data: {
          ...dataToCreate,
        },
      });

      await firstValueFrom(
        this.punktbotClient.send("deletePunkt", repairingPunktId)
      );

      const createdWorkingHours = [];
      workingHours.forEach(async (time) => {
        const createdWorkingHour = await this.prismaService.workingHours.create(
          {
            data: {
              end_time: time.end_time,
              start_time: time.start_time,
              punktId: punkt.id,
              day: time.day as Days,
            },
          }
        );

        createdWorkingHours.push(createdWorkingHour);
      });

      const updatedPunktAdmin = await firstValueFrom(
        this.staffClient.send("update_one_punktAdmin", {
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

  private async findTextOfLocation(lat, long) {
    const response = await firstValueFrom(
      this.httpService.request({
        method: "GET",
        url: `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${long}&accept-language=uz
`,
      })
    );
    return response.data.display_name;
  }
  async findAll(): Promise<Punkt[]> {
    try {
      const allPunkts = await this.prismaService.punkt.findMany({
        include: {
          workingHours: true,
        },
      });

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

  // applied punkts

  async getAppliedPunkts() {
    const appliedPunkts = await firstValueFrom(
      this.punktbotClient.send("get_applies_punkts", "")
    );

    return appliedPunkts;
  }

  async getRepairingPunkts() {
    const repairingPunkts = await firstValueFrom(
      this.punktbotClient.send("get_repairing_punkts", "")
    );

    return repairingPunkts;
  }

  async changeToRepair(punktId: string) {
    await firstValueFrom(this.punktbotClient.send("changeToRepair", punktId));
  }
}
