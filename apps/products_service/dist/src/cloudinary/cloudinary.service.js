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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudinaryService = void 0;
const common_1 = require("@nestjs/common");
const cloudinary_1 = require("cloudinary");
const toStream = require("buffer-to-stream");
let CloudinaryService = class CloudinaryService {
    constructor() {
        cloudinary_1.v2.config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET,
        });
    }
    async uploadBase64Image(base64Image, folderName) {
        return new Promise((resolve, reject) => {
            cloudinary_1.v2.uploader.upload(base64Image, { folder: folderName, resource_type: "auto" }, (error, result) => {
                if (error)
                    return reject(error);
                resolve(result === null || result === void 0 ? void 0 : result.secure_url);
            });
        });
    }
    async uploadFile(file, folderName) {
        return new Promise((resolve, reject) => {
            const upload = cloudinary_1.v2.uploader.upload_stream({
                folder: folderName,
            }, (error, result) => {
                if (error)
                    return reject(error);
                resolve(result === null || result === void 0 ? void 0 : result.secure_url);
            });
            toStream(file.buffer).pipe(upload);
        });
    }
    getPublicIdFromUrl(url) {
        const parts = url.split("/");
        const fileName = parts[parts.length - 1];
        const folderName = parts[parts.length - 2];
        const publicId = `${folderName}/${fileName.split(".")[0]}`;
        return publicId;
    }
    async deleteImage(url) {
        if (url) {
            const publicId = this.getPublicIdFromUrl(url);
            const result = await cloudinary_1.v2.uploader.destroy(publicId);
            return result;
        }
    }
};
exports.CloudinaryService = CloudinaryService;
exports.CloudinaryService = CloudinaryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], CloudinaryService);
//# sourceMappingURL=cloudinary.service.js.map