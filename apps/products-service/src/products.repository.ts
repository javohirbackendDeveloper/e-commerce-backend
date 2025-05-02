import { AbstractRepository } from "@app/common/database/abstract.repository";
import { Product } from "../generated/prisma";
import { Logger } from "@nestjs/common";
import { InjectConnection, InjectModel } from "@nestjs/mongoose";
import { Connection, Model } from "mongoose";

export class ProductRepository extends AbstractRepository<Product> {
  protected readonly logger = new Logger(ProductRepository.name);

  constructor(
    @InjectModel(ProductRepository.name) productModel: Model<Product>,
    @InjectConnection() connection: Connection
  ) {
    super(productModel, connection);
  }
}
