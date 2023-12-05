import { Module } from '@nestjs/common';
import { AuthModule } from "./auth/auth.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import typeOrmConfig from "./config/typeorm.config";
import { AgreementController } from "./controllers";
import { AgreementService } from "./services/agreement.service";

@Module({
  imports: [AuthModule, TypeOrmModule.forRoot(typeOrmConfig)],
  controllers: [AgreementController],
  providers: [AgreementService],
})
export class AppModule {}
