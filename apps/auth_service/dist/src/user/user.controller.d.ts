import { UserService } from "./user.service";
import { CreateUserDto, UserLoginDto } from "./dto/createUser.dto";
import { Request, Response } from "express";
import { ReturnLoginDto, ReturnUserDto } from "./dto/return.dto";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(createUserDto: CreateUserDto): Promise<import("./dto/return.dto").ReturnRegisterDto>;
    loginUser(loginUserDto: UserLoginDto, response: Response): Promise<ReturnLoginDto>;
    getUser(id: string): Promise<ReturnUserDto>;
    getUsers(): Promise<ReturnUserDto[]>;
    refreshToken(req: Request, res: Response): Promise<{
        accessToken: any;
        refreshToken: any;
        message: string;
    }>;
    logoutAdmin(res: Response): Promise<import("./dto/return.dto").ReturnLogoutDto>;
    getUserByToken(req: Request): Promise<any>;
}
