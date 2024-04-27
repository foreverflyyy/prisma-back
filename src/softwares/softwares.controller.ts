import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {Software as SoftwareModel} from ".prisma/client";
import {Prisma} from "@prisma/client";
import {SoftwaresService} from "./softwares.service";

@Controller("softwares")
export class SoftwaresController {
    constructor(
        private readonly softwaresService: SoftwaresService
    ) {
    }

    @Get()
    async getSoftwares(): Promise<SoftwareModel[]> {
        return this.softwaresService.getSoftwares({});
    }

    @Get(":id")
    async getSoftwareById(@Param('id') id: string): Promise<SoftwareModel> {
        return this.softwaresService.getSoftwareById({id});
    }

    @Get('filtered-posts/:searchString')
    async getFilteredSoftware(@Param('searchString') searchString: string,): Promise<SoftwareModel[]> {
        return this.softwaresService.getSoftwares({
            where: {
                OR: [
                    {title: {contains: searchString},},
                    {content: {contains: searchString},},
                ],
            },
        });
    }

    @Post()
    async createSoftware(@Body() dto: Prisma.SoftwareCreateInput): Promise<SoftwareModel> {
        return this.softwaresService.createSoftware(dto);
    }

    @Put(':id')
    async updateSoftware(@Param('id') id: string, @Body() dto: Prisma.SoftwareCreateInput): Promise<SoftwareModel> {
        return this.softwaresService.updateSoftware({
            where: {id}, data: dto,
        });
    }

    @Delete(':id')
    async deleteSoftware(@Param('id') id: string): Promise<SoftwareModel> {
        return this.softwaresService.deleteSoftware({id});
    }
}
