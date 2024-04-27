import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {Installation as InstallationModel} from ".prisma/client";
import {Prisma} from "@prisma/client";
import {InstallationsService} from "./installations.service";

@Controller("installations")
export class InstallationsController {
    constructor(
        private readonly installationsService: InstallationsService
    ) {
    }

    @Get()
    async getInstallations(): Promise<InstallationModel[]> {
        return this.installationsService.getInstallations({});
    }

    @Get(":id")
    async getInstallationById(@Param('id') id: string): Promise<InstallationModel> {
        return this.installationsService.getInstallationById({id});
    }

    @Get('filtered-posts/:searchString')
    async getFilteredInstallation(@Param('searchString') searchString: string,): Promise<InstallationModel[]> {
        return this.installationsService.getInstallations({
            where: {
                OR: [
                    {title: {contains: searchString},},
                    {content: {contains: searchString},},
                ],
            },
        });
    }

    @Post()
    async createInstallation(@Body() dto: Prisma.InstallationCreateInput): Promise<InstallationModel> {
        return this.installationsService.createInstallation(dto);
    }

    @Put(':id')
    async updateInstallation(@Param('id') id: string, @Body() dto: Prisma.InstallationCreateInput): Promise<InstallationModel> {
        return this.installationsService.updateInstallation({
            where: {id}, data: dto,
        });
    }

    @Delete(':id')
    async deleteInstallation(@Param('id') id: string): Promise<InstallationModel> {
        return this.installationsService.deleteInstallation({id});
    }
}
