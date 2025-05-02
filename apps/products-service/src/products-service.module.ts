import { Module } from "@nestjs/common";
import { ProductsServiceController } from "./products-service.controller";
import { ProductsServiceService } from "./products-service.service";
import { ConfigModule } from "@nestjs/config";
import { ProductPrismaService } from "../prisma/prisma.service";
import { RmqModule } from "@app/common";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: "./apps/products-service/.env",
      isGlobal: true,
    }),
    RmqModule.register({
      name: "ORDER-SERVICE",
    }),
  ],
  controllers: [ProductsServiceController],
  providers: [ProductsServiceService, ProductPrismaService],
})
export class ProductsServiceModule {}
