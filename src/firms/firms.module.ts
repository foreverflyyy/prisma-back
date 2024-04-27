import { Module } from '@nestjs/common';
import { FirmsController } from './firms.controller';
import { FirmsService } from './firms.service';
import {PrismaService} from "../prisma.service";

@Module({
  controllers: [FirmsController],
  providers: [FirmsService, PrismaService]
})
export class FirmsModule {}