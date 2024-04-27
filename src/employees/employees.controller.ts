import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {EmployeesService} from "./employees.service";
import {Employee as EmployeeModel, Prisma} from "@prisma/client";

@Controller("employees")
export class EmployeesController {
    constructor(
        private readonly employeesService: EmployeesService
    ) {
    }

    @Get()
    async getEmployees(): Promise<EmployeeModel[]> {
        return this.employeesService.getEmployees({});
    }

    @Get(":id")
    async getEmployeeById(@Param('id') id: string): Promise<EmployeeModel> {
        return this.employeesService.getEmployee({ id });
    }

    @Get('filtered-posts/:searchString')
    async getFilteredEmployees(@Param('searchString') searchString: string,): Promise<EmployeeModel[]> {
        return this.employeesService.getEmployees({
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
    async createDraft(@Body() dto: Prisma.EmployeeCreateInput): Promise<EmployeeModel> {
        const { name } = dto;
        return this.employeesService.createEmployee(dto);
    }

    @Put(':id')
    async publishPost(@Param('id') id: string, @Body() dto: Prisma.EmployeeCreateInput): Promise<EmployeeModel> {
        return this.employeesService.updateEmployee({
            where: { id }, data: dto,
        });
    }

    @Delete(':id')
    async deletePost(@Param('id') id: string): Promise<EmployeeModel> {
        return this.employeesService.deleteEmployee({ id });
    }
}
