import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PrismaService } from "prisma/prisma.service";

@Injectable()
export class AppliesService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAppliedPunkts() {
    try {
      const appliedPunkts = await this.prismaService.applyForPunkt.findMany({
        where: { status: "APPLIED" },
      });

      return appliedPunkts;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server errror",
        err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async getRepairingPunkts() {
    try {
      const appliedPunkts = await this.prismaService.applyForPunkt.findMany({
        where: { status: "REPAIRING" },
      });

      return appliedPunkts;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server errror",
        err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async changeToRepair(punktId: string) {
    try {
      const appliedPunkt = await this.prismaService.applyForPunkt.update({
        where: { id: punktId },
        data: { status: "REPAIRING" },
      });

      return appliedPunkt;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server errror",
        err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async get_one_repairing_punkt(id: string) {
    try {
      const repairingPunkt = await this.prismaService.applyForPunkt.findUnique({
        where: { id },
      });

      return repairingPunkt;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server errror",
        err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async deletePunkt(punktId: string) {
    try {
      const deletedPunkt = await this.prismaService.applyForPunkt.delete({
        where: {
          id: punktId,
        },
      });

      return deletedPunkt;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server errror",
        err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
