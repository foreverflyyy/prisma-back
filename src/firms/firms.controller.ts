import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {FirmsService} from "./firms.service";
import {Firm as FirmModel} from ".prisma/client";
import {Prisma} from "@prisma/client";

@Controller("firms")
export class FirmsController {
    constructor(
        private readonly firmsService: FirmsService
    ) {
    }

    @Get()
    async getFirms(): Promise<FirmModel[]> {
        return this.firmsService.getFirms({});
    }

    @Get(":id")
    async getFirmById(@Param('id') id: string): Promise<FirmModel> {
        return this.firmsService.getFirm({ id });
    }

    @Get('filtered-posts/:searchString')
    async getFilteredFirms(@Param('searchString') searchString: string,): Promise<FirmModel[]> {
        return this.firmsService.getFirms({
            where: {
                OR: [
                    {
                        title: { contains: searchString },
                    },
                    {
                        content: { contains: searchString },
                    },
                ],
            },
        });
    }

    @Post()
    async createFirm(@Body() dto: Prisma.EmployeeCreateInput): Promise<FirmModel> {
        const { name } = dto;
        return this.firmsService.createFirm(dto);
    }

    @Put(':id')
    async publishFirm(@Param('id') id: string, @Body() dto: Prisma.EmployeeCreateInput): Promise<FirmModel> {
        return this.firmsService.updateFirm({
            where: { id }, data: dto,
        });
    }

    @Delete(':id')
    async deleteFirm(@Param('id') id: string): Promise<FirmModel> {
        return this.firmsService.deleteFirm({ id });
    }
}
