import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { ReduceQuantity, UpdateProductDto } from "./dto/update-product.dto";

import { ReturnData } from "./interface";
import { CategoryService } from "../category/category.service";
import { SearchService } from "../search/search.service";
import { CloudinaryService } from "../cloudinary/cloudinary.service";
import { ReturnMinMaxDto } from "./dto/return.dto";
import { FilterQueryDto } from "./dto/filterQuery.dto";
import { PrismaService } from "prisma/prisma.service";
import { Category, Prisma, Product, ProductImage } from "@prisma/client";
import { Response } from "express";
import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { Cache } from "cache-manager";

import { Redis } from "ioredis";

const redis = new Redis(
  "rediss://default:36324d3c8f944be898442b5fb132a650@gusc1-careful-oriole-30679.upstash.io:30679"
);

@Injectable()
export class ProductService {
  constructor(
    private readonly categoryService: CategoryService,
    private readonly prismaService: PrismaService,
    private readonly searchService: SearchService,
    private readonly cloudinaryService: CloudinaryService,
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache
  ) {}

  // firstly images created, then product datas created

  async createImage(files: Express.Multer.File[]) {
    try {
      if (!files || files.length === 0) {
        throw new HttpException(
          "Please upload at least 1 file",
          HttpStatus.BAD_REQUEST
        );
      }

      const uploadedFileUrls: string[] = [];

      for (const img of files) {
        const imageUrl = await this.cloudinaryService.uploadFile(
          img,
          "products"
        );

        if (imageUrl) {
          uploadedFileUrls.push(imageUrl);
        }
      }

      await this.cacheManager.del("all-products");

      return {
        message:
          "Rasmlar muvaffaqiyatli yuklandi endi mahsulotini boshqa malumotlarini kiriting",
        uploadedFileUrls,
      };
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server err",
        err.status || 500
      );
    }
  }

  async create(createProductDto: CreateProductDto): Promise<Product> {
    try {
      const {
        categoryId,
        product_name,
        description,
        price,
        oldPrice,
        quantity,
        brandId,
        color,
        filters,
        product_images,
      } = createProductDto;

      const category = await this.prismaService.category.findUnique({
        where: { id: categoryId },
      });

      if (!category) {
        throw new HttpException(
          "This category not found with this id " + categoryId,
          HttpStatus.NOT_FOUND
        );
      } else if (category.children > 0) {
        throw new HttpException(
          "Iltimos kategoriyani oxirigacha tanlang",
          HttpStatus.BAD_REQUEST
        );
      }

      const productData: Prisma.ProductCreateInput = {
        product_name,
        description,
        price,
        quantity,
        brand: {
          connect: { id: brandId },
        },
        color,
        filters,
        oldPrice,
        category: {
          connect: { id: categoryId },
        },
      };

      const product = await this.prismaService.product.create({
        data: {
          ...productData,
        },
      });

      const createdImages: ProductImage[] = [];
      for (const image of product_images) {
        const upload = await this.prismaService.productImage.create({
          data: { productId: product.id, imageUrl: image },
        });

        createdImages.push(upload);
      }

      // deleting products from cache

      await this.cacheManager.del("all-products:*");

      // await this.searchService.addProductToIndex(product);

      return product;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server err",
        err.status || 500
      );
    }
  }

  async findAll(page = 1, limit = 10): Promise<Product[]> {
    try {
      const skip = (page - 1) * limit;

      const cacheKey = `all-products:page-${page}:limit-${limit}`;

      const productsFromCache =
        await this.cacheManager.get<Product[]>(cacheKey);

      if (productsFromCache) {
        console.log("products came from cache");

        return productsFromCache;
      }
      const products = await this.prismaService.product.findMany({
        skip,
        take: limit,
        orderBy: {
          createdAt: "desc",
        },
        include: {
          category: true,
          comments: true,
          product_images: true,
          brand: true,
        },
      });

      await this.cacheManager.set(cacheKey, products, 60000);

      return products;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server error",
        err.status || 500
      );
    }
  }

  async findOne(id: string) {
    try {
      const product = await this.prismaService.product.findUnique({
        where: { id },
      });

      if (!product) {
        throw new NotFoundException(`Product with ID ${id} not found`);
      }

      return product;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server err",
        err.status || 500
      );
    }
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    try {
      const { categoryId, brandId, ...others } = updateProductDto;

      const updateData: any = {
        ...others,
      };

      if (categoryId) {
        updateData.category = {
          connect: { id: categoryId },
        };
      }

      if (brandId) {
        updateData.brand = {
          connect: { id: brandId },
        };
      }

      const product = await this.prismaService.product.update({
        where: { id },
        data: updateData,
      });
      // await this.searchService.update(product);

      await this.cacheManager.del("all-products");

      return product;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server err",
        err.status || 500
      );
    }
  }

  async remove(id: string) {
    try {
      const product = await this.prismaService.product.findUnique({
        where: { id },
      });

      if (!product) {
        throw new HttpException(
          "This product not found with id " + id,
          HttpStatus.NOT_FOUND
        );
      }
      // await this.searchService.delete(product);

      await this.deleteProductImages(id);

      await this.prismaService.product.delete({ where: { id } });

      await this.cacheManager.del("all-products");

      return {
        message: `Product with id ${id} deleted successfully`,
        success: true,
      };
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server err",
        err.status || 500
      );
    }
  }

  private async deleteProductImages(productId: string) {
    try {
      const productImages = await this.prismaService.productImage.findMany({
        where: {
          productId,
        },
        select: {
          imageUrl: true,
        },
      });

      if (productImages.length > 0) {
        await this.prismaService.productImage.deleteMany({
          where: { productId },
        });
        for (const img of productImages) {
          await this.cloudinaryService.deleteImage(img.imageUrl);
        }
      }

      return productImages;
    } catch (err) {
      console.log("Error in delete product images function", err);

      throw new HttpException(
        err.message || "Internal server err",
        err.status || 500
      );
    }
  }

  async deleteOneImage(imageId: string) {
    try {
      const image = await this.prismaService.productImage.findUnique({
        where: { id: imageId },
      });

      if (!image) {
        throw new HttpException(
          "This product image not found with this id " + imageId,
          HttpStatus.NOT_FOUND
        );
      }

      const allImagesOfProduct = await this.prismaService.productImage.findMany(
        {
          where: { productId: image.productId },
        }
      );

      if (allImagesOfProduct.length === 1) {
        return { message: "Mahsulotda kamida 1 ta rasm bo'lishi shart" };
      }

      await this.prismaService.productImage.delete({
        where: { id: imageId },
      });
      await this.cloudinaryService.deleteImage(image.imageUrl);

      await this.cacheManager.del("all-products");

      return image;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server err",
        err.status || 500
      );
    }
  }

  async uploadOneImage(file: Express.Multer.File, productId: string) {
    try {
      const product = await this.prismaService.product.findUnique({
        where: { id: productId },
      });

      if (!product) {
        throw new HttpException(
          "This product  not found with this id " + productId,
          HttpStatus.NOT_FOUND
        );
      }

      const imageUrl = await this.cloudinaryService.uploadFile(
        file,
        "products"
      );
      const image = await this.prismaService.productImage.create({
        data: {
          productId,
          imageUrl,
        },
      });

      await this.cacheManager.del("all-products");
      return image;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server err",
        err.status || 500
      );
    }
  }

  async getProductsByIds(productIds: string[]): Promise<Product[]> {
    const sortedProductIds = [...productIds].sort();
    const cacheKey = `all-products-byIds:${sortedProductIds.join("_")}`;

    const cacheProducts = await this.cacheManager.get<Product[]>(cacheKey);

    if (cacheProducts) {
      return cacheProducts;
    }

    const products = await this.prismaService.product.findMany({
      where: {
        id: {
          in: productIds,
        },
      },
      include: {
        product_images: true,
      },
    });

    await this.cacheManager.set(cacheKey, products, 1800000);

    return products;
  }

  async getAllChildCategoryIdsRecursive(categoryId: string): Promise<string[]> {
    const visited: Set<string> = new Set();

    const collect = async (id: string) => {
      if (visited.has(id)) return;

      const cacheKey = `all-children-category:${id}`;

      let childrenIds: string[] =
        (await this.cacheManager.get<string[]>(cacheKey)) || [];

      if (!childrenIds.length) {
        const children = await this.prismaService.category.findMany({
          where: { parentId: id },
          select: { id: true },
        });

        childrenIds = children.map((item) => item.id);

        await this.cacheManager.set(cacheKey, childrenIds, 60000);
      }

      visited.add(id);

      for (const childId of childrenIds) {
        await collect(childId);
      }
    };

    await collect(categoryId);
    return Array.from(visited);
  }

  async filterProducts(
    products: Product[],
    allFilters: FilterQueryDto
  ): Promise<Product[]> {
    const { brand, color, starterPrice, endOfPrice, product_status, filters } =
      allFilters;

    console.log({ allFilters });

    const filtered = products.filter((product) => {
      if (
        brand &&
        brand.length > 0 &&
        !brand.includes((product as any).brand?.name)
      ) {
        return false;
      }

      if (color && color.length > 0) {
        if (!product.color || !color.some((c) => product.color.includes(c)))
          return false;
      }

      if (starterPrice && product.price < +starterPrice) return false;
      if (endOfPrice && product.price > +endOfPrice) return false;
      if (product_status && product.product_status !== product_status)
        return false;

      if (filters && Object.keys(filters).length > 0) {
        for (const key in filters) {
          const filterValue = filters[key];
          if (
            !product.filters ||
            !product.filters.hasOwnProperty(key) ||
            product.filters[key] !== filterValue
          ) {
            return false;
          }
        }
      }

      return true;
    });

    return filtered;
  }

  async getAllProductsByCategory(
    categoryId: string,
    filters: FilterQueryDto,
    page = 1,
    limit = 10
  ): Promise<Product[]> {
    const allChildCategoryIds =
      await this.getAllChildCategoryIdsRecursive(categoryId);

    const skip = (page - 1) * limit;

    const cacheKey = `all-products-byCategory:${categoryId}`;

    let products: Product[];
    products = (await this.cacheManager.get(cacheKey)) || [];

    if (!products?.length) {
      products = await this.prismaService.product.findMany({
        skip,
        take: limit * 3,
        where: {
          OR: [{ categoryId: { in: allChildCategoryIds } }, { categoryId }],
        },
        include: {
          product_images: true,
          brand: true,
          category: true,
          comments: true,
        },
      });

      await this.cacheManager.set(cacheKey, products, 1800000);
    } else {
      console.log("it is coming from cache", products);
    }

    const filteredProducts = await this.filterProducts(products, filters);

    const paginatedProducts = filteredProducts.slice(skip, skip + limit);

    return paginatedProducts;
  }

  async getMinMaxPrices(): Promise<ReturnMinMaxDto> {
    try {
      const allProducts = await this.findAll();
      let minPrice = allProducts.length > 0 ? allProducts[0].price : 0;
      let maxPrice = 0;

      allProducts.forEach((product) => {
        if (product.price < minPrice) {
          minPrice = product.price;
        }
        if (product.price > maxPrice) {
          maxPrice = product.price;
        }
      });

      return { minPrice, maxPrice };
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server error",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  // healther api for server

  async keepHealthServer(res: Response) {
    res.json({ message: "Hello world from products service" });
  }

  async reduce_quantity(reduceDto: ReduceQuantity[]) {
    try {
      const updatedProducts = await Promise.all(
        reduceDto.map((product) => {
          return this.prismaService.product.update({
            where: { id: product.productId },
            data: {
              quantity: {
                decrement: product.quantity,
              },
            },
          });
        })
      );

      return updatedProducts;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server error",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
