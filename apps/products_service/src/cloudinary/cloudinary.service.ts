import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { v2 as cloudinary } from "cloudinary";
import * as toStream from "buffer-to-stream";

@Injectable()
export class CloudinaryService {
  constructor() {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
  }

  async uploadBase64Image(
    base64Image: string,
    folderName: string
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      cloudinary.uploader.upload(
        base64Image,
        { folder: folderName, resource_type: "auto" },
        (error, result) => {
          if (error) return reject(error);
          resolve(result?.secure_url as string);
        }
      );
    });
  }

  async uploadFile(
    file: Express.Multer.File,
    folderName: string
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      const upload = cloudinary.uploader.upload_stream(
        {
          folder: folderName,
        },
        (error, result) => {
          if (error) return reject(error);
          resolve(result?.secure_url as string);
        }
      );

      toStream(file.buffer).pipe(upload);
    });
  }

  private getPublicIdFromUrl(url: string) {
    const parts = url.split("/");
    const fileName = parts[parts.length - 1];
    const folderName = parts[parts.length - 2];
    const publicId = `${folderName}/${fileName.split(".")[0]}`;
    return publicId;
  }

  async deleteImage(url: string) {
    if (url) {
      const publicId = this.getPublicIdFromUrl(url);
      const result = await cloudinary.uploader.destroy(publicId);
      return result;
    }
  }
}
