import {Prisma} from "@prisma/client";

export class GetFirmsDto {
    skip?: number;
    take?: number;
    cursor?: Prisma.FirmWhereUniqueInput;
    where?: any;
    orderBy?: Prisma.FirmOrderByWithRelationInput;
}