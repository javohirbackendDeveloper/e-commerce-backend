import { Logger, NotFoundException } from "@nestjs/common";
import {
  FilterQuery,
  Model,
  Types,
  UpdateQuery,
  SaveOptions,
  Connection,
} from "mongoose";

export abstract class AbstractRepository<TDocument> {
  protected abstract readonly logger: Logger;

  constructor(
    protected readonly model: Model<TDocument>,
    private readonly connection: Connection
  ) {}

  async create(document: TDocument, options?: SaveOptions): Promise<TDocument> {
    const createdDocument = new this.model({
      ...document,
      _id: new Types.ObjectId(),
    });
    return (
      await createdDocument.save(options)
    ).toJSON() as unknown as TDocument;
  }

  async findOne(filterQuery: FilterQuery<TDocument>): Promise<TDocument | any> {
    const document = await this.model.findOne(filterQuery, {}, { lean: true });

    if (!document) {
      this.logger.warn("Document not found with filterQuery", filterQuery);
      throw new NotFoundException("Document not found.");
    }

    return document;
  }

  async findOneAndUpdate(
    filterQuery: FilterQuery<TDocument>,
    update: UpdateQuery<TDocument>
  ) {
    const document = await this.model.findOneAndUpdate(filterQuery, update, {
      new: true,
    });

    if (!document) {
      this.logger.warn(`Document not found with filterQuery:`, filterQuery);
      throw new NotFoundException("Document not found.");
    }

    return document;
  }

  async upsert(
    filterQuery: FilterQuery<TDocument>,
    document: Partial<TDocument>
  ) {
    return this.model.findOneAndUpdate(filterQuery, document, {
      upsert: true,
      new: true,
    });
  }

  async find(filterQuery: FilterQuery<TDocument>) {
    return this.model.find(filterQuery, {});
  }

  async startTransaction(): Promise<any> {
    const session = await this.connection.startSession();
    session.startTransaction();

    return session;
  }
}
