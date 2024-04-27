import { Module } from '@nestjs/common';
import { InstallationsController } from './installations.controller';
import { InstallationsService } from './installations.service';
import {PrismaService} from "../prisma.service";

@Module({
  controllers: [InstallationsController],
  providers: [InstallationsService, PrismaService]
})
export class InstallationsModule {}
