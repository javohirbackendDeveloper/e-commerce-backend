import { Client } from "@elastic/elasticsearch";
import {
  forwardRef,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Product } from "apps/products_service/generated/prisma";
import { FilterQueryDto } from "./dto/filterQuery.dto";
import { PrismaService } from "apps/products_service/prisma/prisma.service";
import { ProductService } from "../product/product.service";

const client = new Client({
  node: "https://tezbuy-ea7cb8.es.eu-west-1.aws.elastic.cloud:443",
  auth: {
    apiKey: "NEVTeXhKWUIycl9MR0ZuNVVCd0E6bDlJMDRwUExxbzh5Qjl2S3lWaXZvUQ==",
  },
});
@Injectable()
export class SearchService {
  private readonly index = "products";
  constructor(
    private readonly prismaService: PrismaService,
    @Inject(forwardRef(() => ProductService))
    private readonly productService: ProductService
  ) {}

  async createindex() {
    const index = this.index;
    const checkindex = await client.indices.exists({ index });

    if (!checkindex) {
      try {
        const connection = await client.ping();
        if (!connection) {
          throw new HttpException(
            "Elastic searchga ulanishda xatolik",
            HttpStatus.CONFLICT
          );
        }
        await client.indices.create({
          index,
          body: {
            mappings: {
              properties: {
                product_name: { type: "text", analyzer: "autocomplete" },
                description: { type: "text" },
              },
            },
            settings: {
              analysis: {
                filter: {
                  autocomplete_filter: {
                    type: "edge_ngram",
                    min_gram: 1,
                    max_gram: 20,
                  },
                },
                analyzer: {
                  autocomplete: {
                    type: "custom",
                    tokenizer: "standard",
                    filter: ["lowercase", "autocomplete_filter"],
                  },
                },
              },
            },
          } as any,
        });
        console.log(`Index ${index} yaratildi`);
      } catch (err) {
        console.error("Index yaratishda xatolik:", err);
      }
    }
  }

  async addProductToIndex(product: Product) {
    return client.index({
      index: this.index,
      id: product.id,
      document: {
        id: product.id,
        product_name: product.product_name,
        description: product.description,
      },
    });
  }

  async search(query: string) {
    const { hits } = await client.search({
      index: this.index,
      query: {
        multi_match: {
          query,
          fields: ["product_name", "description"],
        },
      },
    });

    return hits.hits.map((hit) => hit._source);
  }

  async delete(product: Product) {
    return client.delete({
      index: this.index,
      id: product.id.toString(),
    });
  }

  async update(product: Product) {
    this.delete(product);
    this.addProductToIndex(product);
  }

  async filterProducts(query: FilterQueryDto): Promise<Product[]> {
    try {
      const { brand, color, endOfPrice, starterPrice, categoryId } = query;

      let categoryProductIds: string[] = [];

      if (categoryId) {
        const productsByCategory =
          await this.productService.getAllProductsByCategory(categoryId);
        categoryProductIds = productsByCategory.map((p) => p.id);
      }

      const products = await this.prismaService.product.findMany({
        where: {
          AND: [
            ...(categoryProductIds.length > 0
              ? [{ id: { in: categoryProductIds } }]
              : []),

            ...(brand && brand.length > 0 ? [{ brand: { in: brand } }] : []),

            ...(color && color.length > 0
              ? [{ color: { hasSome: color } }]
              : []),

            ...(starterPrice ? [{ price: { gte: +starterPrice } }] : []),

            ...(endOfPrice ? [{ price: { lte: +endOfPrice } }] : []),
          ],
        },
      });

      return products;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server error",
        err.status || HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
