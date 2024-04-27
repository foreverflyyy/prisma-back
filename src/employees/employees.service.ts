import {Injectable} from '@nestjs/common';
import {PrismaService} from "../prisma.service";
import {Employee, Prisma} from "@prisma/client";
import {GetEmployeesDto} from "./dto";

@Injectable()
export class EmployeesService {
    constructor(
        private prisma: PrismaService
    ) {
    }

    async getEmployee(userWhereUniqueInput: Prisma.EmployeeWhereUniqueInput): Promise<Employee> {
        return this.prisma.employee.findUnique({
            where: userWhereUniqueInput,
        });
    }

    async getEmployees(params: GetEmployeesDto): Promise<Employee[]> {
        return this.prisma.employee.findMany({
            ...params,
            include: {
                firm: true,
                developments: true,
                installations: true
            }
        });
    }

    async createEmployee(data: Prisma.EmployeeCreateInput): Promise<Employee> {
        return this.prisma.employee.create({data});
    }

    async updateEmployee(params: {
        where: Prisma.EmployeeWhereUniqueInput;
        data: Prisma.EmployeeUpdateInput;
    }): Promise<Employee> {
        const {where, data} = params;
        return this.prisma.employee.update({data, where});
    }

    async deleteEmployee(where: Prisma.EmployeeWhereUniqueInput): Promise<Employee> {
        return this.prisma.employee.delete({
            where,
        });
    }
}
