import { Module } from '@nestjs/common';
import { AuthModule } from "./auth/auth.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import typeOrmConfig from "./config/typeorm.config";
import { AgreementController } from "./controllers";
import { AgreementService } from "./services/agreement.service";
import { JwtService } from "@nestjs/jwt";
import { AgreementRepository } from "./repositories/agreement.repository";

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot(typeOrmConfig)
  ],
  controllers: [AgreementController],
  providers: [
    AgreementService,
    JwtService,
    AgreementRepository
  ],
})
export class AppModule {}
