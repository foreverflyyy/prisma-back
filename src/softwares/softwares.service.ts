import {Injectable} from '@nestjs/common';
import {PrismaService} from "../prisma.service";
import {Prisma, Software} from "@prisma/client";

@Injectable()
export class SoftwaresService {
    constructor(
        private prisma: PrismaService
    ) {
    }

    async getSoftwares(params: any): Promise<Software[]> {
        return this.prisma.software.findMany({
            ...params,
            include: {
                firm: true,
                value: true,
                installations: true
            }
        });
    }

    async getSoftwareById(whereInput: Prisma.SoftwareWhereUniqueInput): Promise<Software> {
        return this.prisma.software.findUnique({
            where: whereInput,
        });
    }

    async createSoftware(data: Prisma.SoftwareCreateInput): Promise<Software> {
        return this.prisma.software.create({data});
    }

    async updateSoftware(params: {
        where: Prisma.SoftwareWhereUniqueInput;
        data: Prisma.SoftwareUpdateInput;
    }): Promise<Software> {
        const {where, data} = params;
        return this.prisma.software.update({data, where});
    }

    async deleteSoftware(where: Prisma.SoftwareWhereUniqueInput): Promise<Software> {
        return this.prisma.software.delete({where});
    }
}
