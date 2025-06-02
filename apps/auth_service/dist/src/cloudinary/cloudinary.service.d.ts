export declare class CloudinaryService {
    constructor();
    uploadBase64Image(base64Image: string, folderName: string): Promise<string>;
    uploadFile(file: Express.Multer.File, folderName: string): Promise<string>;
    private getPublicIdFromUrl;
    deleteImage(url: string): Promise<any>;
}
