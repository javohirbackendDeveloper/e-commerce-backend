export declare class ReturnMessageDto {
    message: string;
    success?: boolean;
    statusCode?: number;
    data?: unknown;
}
export declare class ReturnLoginDto {
    message?: string;
    accessToken: string;
    refreshToken: string;
}
export declare class ReturnAdminDto {
    id: string;
    username: string;
    password: string;
    first_name?: string | null;
    last_name?: string | null;
    phone_number: string;
    role: string;
}
export declare class ReturnLogoutDto {
    message: string;
}
