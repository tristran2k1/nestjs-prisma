import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostsService {
    constructor(private prisma: PrismaService) {}

    createGroupPost(
        userIds: number[],
        data: Prisma.GroupPostCreateWithoutUsersInput
    ){
        return this.prisma.groupPost.create({
            data:{
                ...data,
                users:{
                    create: userIds.map((id) => ({userId: id})) // map((userId)=>({userId}))
                }
            }
        })
    }
}
