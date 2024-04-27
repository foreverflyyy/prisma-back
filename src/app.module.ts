import {Module} from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import {EmployeesModule} from './employees/employees.module';
import {SoftwaresModule} from './softwares/softwares.module';
import {InstallationsModule} from './installations/installations.module';
import {FirmsModule} from './firms/firms.module';
import {ValuesModule} from './values/values.module';

@Module({
    imports: [
        ConfigModule.forRoot({envFilePath: '.env',}),
        EmployeesModule,
        SoftwaresModule,
        InstallationsModule,
        FirmsModule,
        ValuesModule
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
}
