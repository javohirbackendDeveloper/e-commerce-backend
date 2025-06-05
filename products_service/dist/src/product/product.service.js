"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const category_service_1 = require("../category/category.service");
const search_service_1 = require("../search/search.service");
const cloudinary_service_1 = require("../cloudinary/cloudinary.service");
const prisma_service_1 = require("../../prisma/prisma.service");
const cache_manager_1 = require("@nestjs/cache-manager");
const ioredis_1 = require("ioredis");
const redis = new ioredis_1.Redis("rediss://default:36324d3c8f944be898442b5fb132a650@gusc1-careful-oriole-30679.upstash.io:30679");
let ProductService = class ProductService {
    constructor(categoryService, prismaService, searchService, cloudinaryService, cacheManager) {
        this.categoryService = categoryService;
        this.prismaService = prismaService;
        this.searchService = searchService;
        this.cloudinaryService = cloudinaryService;
        this.cacheManager = cacheManager;
    }
    async createImage(files) {
        try {
            if (!files || files.length === 0) {
                throw new common_1.HttpException("Please upload at least 1 file", common_1.HttpStatus.BAD_REQUEST);
            }
            const uploadedFileUrls = [];
            for (const img of files) {
                const imageUrl = await this.cloudinaryService.uploadFile(img, "products");
                if (imageUrl) {
                    uploadedFileUrls.push(imageUrl);
                }
            }
            await this.cacheManager.del("all-products");
            return {
                message: "Rasmlar muvaffaqiyatli yuklandi endi mahsulotini boshqa malumotlarini kiriting",
                uploadedFileUrls,
            };
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "Internal server err", err.status || 500);
        }
    }
    async create(createProductDto) {
        try {
            const { categoryId, product_name, description, price, oldPrice, quantity, brandId, color, filters, product_images, } = createProductDto;
            const category = await this.prismaService.category.findUnique({
                where: { id: categoryId },
            });
            if (!category) {
                throw new common_1.HttpException("This category not found with this id " + categoryId, common_1.HttpStatus.NOT_FOUND);
            }
            else if (category.children > 0) {
                throw new common_1.HttpException("Iltimos kategoriyani oxirigacha tanlang", common_1.HttpStatus.BAD_REQUEST);
            }
            const productData = {
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
                data: Object.assign({}, productData),
            });
            const createdImages = [];
            for (const image of product_images) {
                const upload = await this.prismaService.productImage.create({
                    data: { productId: product.id, imageUrl: image },
                });
                createdImages.push(upload);
            }
            await this.cacheManager.del("all-products:*");
            return product;
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "Internal server err", err.status || 500);
        }
    }
    async findAll(page = 1, limit = 10) {
        try {
            const skip = (page - 1) * limit;
            const cacheKey = `all-products:page-${page}:limit-${limit}`;
            const productsFromCache = await this.cacheManager.get(cacheKey);
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
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "Internal server error", err.status || 500);
        }
    }
    async findOne(id) {
        try {
            const product = await this.prismaService.product.findUnique({
                where: { id },
            });
            if (!product) {
                throw new common_1.NotFoundException(`Product with ID ${id} not found`);
            }
            return product;
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "Internal server err", err.status || 500);
        }
    }
    async update(id, updateProductDto) {
        try {
            const { categoryId, brandId } = updateProductDto, others = __rest(updateProductDto, ["categoryId", "brandId"]);
            const updateData = Object.assign({}, others);
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
            await this.cacheManager.del("all-products");
            return product;
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "Internal server err", err.status || 500);
        }
    }
    async remove(id) {
        try {
            const product = await this.prismaService.product.findUnique({
                where: { id },
            });
            if (!product) {
                throw new common_1.HttpException("This product not found with id " + id, common_1.HttpStatus.NOT_FOUND);
            }
            await this.deleteProductImages(id);
            await this.prismaService.product.delete({ where: { id } });
            await this.cacheManager.del("all-products");
            return {
                message: `Product with id ${id} deleted successfully`,
                success: true,
            };
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "Internal server err", err.status || 500);
        }
    }
    async deleteProductImages(productId) {
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
        }
        catch (err) {
            console.log("Error in delete product images function", err);
            throw new common_1.HttpException(err.message || "Internal server err", err.status || 500);
        }
    }
    async deleteOneImage(imageId) {
        try {
            const image = await this.prismaService.productImage.findUnique({
                where: { id: imageId },
            });
            if (!image) {
                throw new common_1.HttpException("This product image not found with this id " + imageId, common_1.HttpStatus.NOT_FOUND);
            }
            const allImagesOfProduct = await this.prismaService.productImage.findMany({
                where: { productId: image.productId },
            });
            if (allImagesOfProduct.length === 1) {
                return { message: "Mahsulotda kamida 1 ta rasm bo'lishi shart" };
            }
            await this.prismaService.productImage.delete({
                where: { id: imageId },
            });
            await this.cloudinaryService.deleteImage(image.imageUrl);
            await this.cacheManager.del("all-products");
            return image;
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "Internal server err", err.status || 500);
        }
    }
    async uploadOneImage(file, productId) {
        try {
            const product = await this.prismaService.product.findUnique({
                where: { id: productId },
            });
            if (!product) {
                throw new common_1.HttpException("This product  not found with this id " + productId, common_1.HttpStatus.NOT_FOUND);
            }
            const imageUrl = await this.cloudinaryService.uploadFile(file, "products");
            const image = await this.prismaService.productImage.create({
                data: {
                    productId,
                    imageUrl,
                },
            });
            await this.cacheManager.del("all-products");
            return image;
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "Internal server err", err.status || 500);
        }
    }
    async getProductsByIds(productIds) {
        const sortedProductIds = [...productIds].sort();
        const cacheKey = `all-products-byIds:${sortedProductIds.join("_")}`;
        const cacheProducts = await this.cacheManager.get(cacheKey);
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
    async getAllChildCategoryIdsRecursive(categoryId) {
        const visited = new Set();
        const collect = async (id) => {
            if (visited.has(id))
                return;
            const cacheKey = `all-children-category:${id}`;
            let childrenIds = (await this.cacheManager.get(cacheKey)) || [];
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
    async filterProducts(products, allFilters) {
        const { brand, color, starterPrice, endOfPrice, product_status, filters } = allFilters;
        console.log({ allFilters });
        const filtered = products.filter((product) => {
            var _a;
            if (brand &&
                brand.length > 0 &&
                !brand.includes((_a = product.brand) === null || _a === void 0 ? void 0 : _a.name)) {
                return false;
            }
            if (color && color.length > 0) {
                if (!product.color || !color.some((c) => product.color.includes(c)))
                    return false;
            }
            if (starterPrice && product.price < +starterPrice)
                return false;
            if (endOfPrice && product.price > +endOfPrice)
                return false;
            if (product_status && product.product_status !== product_status)
                return false;
            if (filters && Object.keys(filters).length > 0) {
                for (const key in filters) {
                    const filterValue = filters[key];
                    if (!product.filters ||
                        !product.filters.hasOwnProperty(key) ||
                        product.filters[key] !== filterValue) {
                        return false;
                    }
                }
            }
            return true;
        });
        return filtered;
    }
    async getAllProductsByCategory(categoryId, filters, page = 1, limit = 10) {
        const allChildCategoryIds = await this.getAllChildCategoryIdsRecursive(categoryId);
        const skip = (page - 1) * limit;
        const cacheKey = `all-products-byCategory:${categoryId}`;
        let products;
        products = (await this.cacheManager.get(cacheKey)) || [];
        if (!(products === null || products === void 0 ? void 0 : products.length)) {
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
        }
        else {
            console.log("it is coming from cache", products);
        }
        const filteredProducts = await this.filterProducts(products, filters);
        const paginatedProducts = filteredProducts.slice(skip, skip + limit);
        return paginatedProducts;
    }
    async getMinMaxPrices() {
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
        }
        catch (err) {
            throw new common_1.HttpException(err.message || "Internal server error", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async keepHealthServer(res) {
        res.json({ message: "Hello world from products service" });
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(4, (0, common_1.Inject)(cache_manager_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [category_service_1.CategoryService,
        prisma_service_1.PrismaService,
        search_service_1.SearchService,
        cloudinary_service_1.CloudinaryService, Object])
], ProductService);
//# sourceMappingURL=product.service.js.map