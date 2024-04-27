import {Prisma} from "@prisma/client";
import {ValuesService} from "./values.service";
import {Value as ValueModel} from ".prisma/client";
import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';

@Controller("values")
export class ValuesController {
    constructor(
        private readonly valuesService: ValuesService
    ) {
    }

    @Get()
    async getValues(): Promise<ValueModel[]> {
        return this.valuesService.getValues({});
    }

    @Get(":id")
    async getValueById(@Param('id') id: string): Promise<ValueModel> {
        return this.valuesService.getValueById({id});
    }

    @Get('filtered-posts/:searchString')
    async getFilteredValue(@Param('searchString') searchString: string,): Promise<ValueModel[]> {
        return this.valuesService.getValues({
            where: {
                OR: [
                    {title: {contains: searchString},},
                    {content: {contains: searchString},},
                ],
            },
        });
    }

    @Post()
    async createValue(@Body() dto: Prisma.ValueCreateInput): Promise<ValueModel> {
        return this.valuesService.createValue(dto);
    }

    @Put(':id')
    async updateValue(@Param('id') id: string, @Body() dto: Prisma.ValueCreateInput): Promise<ValueModel> {
        return this.valuesService.updateValue({
            where: {id}, data: dto,
        });
    }

    @Delete(':id')
    async deleteValue(@Param('id') id: string): Promise<ValueModel> {
        return this.valuesService.deleteValue({id});
    }
}
