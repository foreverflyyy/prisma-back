import {Injectable} from '@nestjs/common';
import {PrismaService} from "../prisma.service";
import {Prisma, Value} from "@prisma/client";

@Injectable()
export class ValuesService {
    constructor(
        private prisma: PrismaService
    ) {
    }

    async getValues(params: any): Promise<Value[]> {
        return this.prisma.value.findMany({
            ...params,
            include: {
                softwares: true
            }
        });
    }

    async getValueById(whereInput: Prisma.ValueWhereUniqueInput): Promise<Value> {
        return this.prisma.value.findUnique({
            where: whereInput,
        });
    }

    async createValue(data: Prisma.ValueCreateInput): Promise<Value> {
        return this.prisma.value.create({data});
    }

    async updateValue(params: {
        where: Prisma.ValueWhereUniqueInput;
        data: Prisma.ValueUpdateInput;
    }): Promise<Value> {
        const {where, data} = params;
        return this.prisma.value.update({data, where});
    }

    async deleteValue(where: Prisma.ValueWhereUniqueInput): Promise<Value> {
        return this.prisma.value.delete({where});
    }
}
