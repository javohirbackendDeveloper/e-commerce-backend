import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { PrismaService } from "apps/products_service/prisma/prisma.service";
import {
  Category,
  Prisma,
  Product,
  ProductImage,
} from "apps/products_service/generated/prisma";
import { ReturnData } from "./interface";
import { CategoryService } from "../category/category.service";
import { SearchService } from "../search/search.service";
import { CloudinaryService } from "../cloudinary/cloudinary.service";

@Injectable()
export class ProductService {
  constructor(
    private readonly categoryService: CategoryService,
    private readonly prismaService: PrismaService,
    private readonly searchService: SearchService,
    private readonly cloudinaryService: CloudinaryService
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

      // await this.searchService.addProductToIndex(product);

      return product;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server err",
        err.status || 500
      );
    }
  }

  async findAll(): Promise<Product[]> {
    try {
      const products = await this.prismaService.product.findMany({
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

      return products;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server err",
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

      return image;
    } catch (err) {
      throw new HttpException(
        err.message || "Internal server err",
        err.status || 500
      );
    }
  }

  async getProductsByIds(productIds: string[]): Promise<Product[]> {
    const products = await this.prismaService.product.findMany({
      where: {
        id: {
          in: productIds,
        },
      },
    });
    return products;
  }

  async getAllProductsByCategory(categoryId: string): Promise<Product[]> {
    const allChildCategories =
      await this.categoryService.getAllChildCategories(categoryId);

    const products = await this.prismaService.product.findMany({
      where: {
        OR: [
          {
            categoryId: {
              in: allChildCategories.map((cat) => cat.id),
            },
          },
          { categoryId },
        ],
      },
    });

    return products;
  }
}
