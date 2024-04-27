import {Injectable} from '@nestjs/common';
import {PrismaService} from "../prisma.service";
import {Firm, Prisma} from "@prisma/client";
import {GetFirmsDto} from "./dto";

@Injectable()
export class FirmsService {
    constructor(
        private prisma: PrismaService
    ) {
    }

    async getFirm(whereInput: Prisma.FirmWhereUniqueInput): Promise<Firm> {
        return this.prisma.firm.findUnique({
            where: whereInput,
            include: {
                employees: true,
                softwares: true
            }
        });
    }

    async getFirms(params: GetFirmsDto): Promise<Firm[]> {
        const {skip, take, cursor, where, orderBy} = params;
        return this.prisma.firm.findMany({
            ...params,
            include: {
                employees: true,
                softwares: true
            }
        });
    }

    async createFirm(data: Prisma.FirmCreateInput): Promise<Firm> {
        return this.prisma.firm.create({data});
    }

    async updateFirm(params: {
        where: Prisma.FirmWhereUniqueInput;
        data: Prisma.FirmUpdateInput;
    }): Promise<Firm> {
        const {where, data} = params;
        return this.prisma.firm.update({data, where});
    }

    async deleteFirm(where: Prisma.FirmWhereUniqueInput): Promise<Firm> {
        return this.prisma.firm.delete({
            where,
        });
    }
}
