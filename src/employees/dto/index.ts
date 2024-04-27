import {Prisma} from "@prisma/client";

export class GetEmployeesDto {
    skip?: number;
    take?: number;
    cursor?: Prisma.EmployeeWhereUniqueInput;
    where?: any;
    orderBy?: Prisma.EmployeeOrderByWithRelationInput;
}

export class CreateEmployeeDto {
    name: string;
    firmId?: string;
}