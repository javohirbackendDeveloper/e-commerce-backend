import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { CreateUserDto } from "./dto/createUser.dto";
import { PrismaUser } from "apps/auth-service/prisma/prisma.service";
import * as bcrypt from "bcryptjs";
import { FilterQuery } from "mongoose";
import { User } from "apps/auth-service/generated/prisma";

@Injectable()
export class UserService {
  constructor(private readonly userPrisma: PrismaUser) {}

  async createUser(createUserDto: CreateUserDto) {
    try {
      const { password, phone_number, username } = createUserDto;
      const hash = await bcrypt.hash(password, 10);

      await this.userPrisma.user.create({
        data: {
          username,
          phone_number,
          password: hash,
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async getUser(query: FilterQuery<User>): Promise<User> {
    const user = await this.userPrisma.user.findUnique({
      where: { username: query.username },
    });
    if (!user) {
      throw new NotFoundException("This user not found ");
    }

    return user;
  }
}
