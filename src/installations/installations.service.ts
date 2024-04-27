import {Injectable} from '@nestjs/common';
import {PrismaService} from "../prisma.service";
import {Installation, Prisma} from "@prisma/client";

@Injectable()
export class InstallationsService {
    constructor(
        private prisma: PrismaService
    ) {
    }

    async getInstallations(params: any): Promise<Installation[]> {
        return this.prisma.installation.findMany({
            ...params,
            include: {
                software: true
            }
        });
    }

    async getInstallationById(whereInput: Prisma.InstallationWhereUniqueInput): Promise<Installation> {
        return this.prisma.installation.findUnique({
            where: whereInput,
        });
    }

    async createInstallation(data: Prisma.InstallationCreateInput): Promise<Installation> {
        return this.prisma.installation.create({data});
    }

    async updateInstallation(params: {
        where: Prisma.InstallationWhereUniqueInput;
        data: Prisma.InstallationUpdateInput;
    }): Promise<Installation> {
        const {where, data} = params;
        return this.prisma.installation.update({data, where});
    }

    async deleteInstallation(where: Prisma.InstallationWhereUniqueInput): Promise<Installation> {
        return this.prisma.installation.delete({where});
    }
}
