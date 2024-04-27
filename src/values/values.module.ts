import { Module } from '@nestjs/common';
import { ValuesController } from './values.controller';
import { ValuesService } from './values.service';
import {PrismaService} from "../prisma.service";

@Module({
  controllers: [ValuesController],
  providers: [ValuesService, PrismaService]
})
export class ValuesModule {}
