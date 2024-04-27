import { Module } from '@nestjs/common';
import { SoftwaresService } from './softwares.service';
import { SoftwaresController } from './softwares.controller';
import {PrismaService} from "../prisma.service";

@Module({
  controllers: [SoftwaresController],
  providers: [SoftwaresService, PrismaService]
})
export class SoftwaresModule {}
