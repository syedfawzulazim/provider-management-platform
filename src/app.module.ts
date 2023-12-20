import { Module } from '@nestjs/common';
import { AuthModule } from "./auth/auth.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import typeOrmConfig from "./config/typeorm.config";
import { AgreementController, OfferController, MaterialGroupController } from "./controllers";
import { AgreementService, MaterialGroupService, OfferService } from "./services";
import { JwtService } from "@nestjs/jwt";
import { AgreementRepository, MaterialGroupRepository, OfferRepository, ProviderRepository } from "./repositories";

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot(typeOrmConfig)
  ],
  controllers: [
    AgreementController,
    OfferController,
    MaterialGroupController,
  ],
  providers: [
    JwtService,
    AgreementService,
    OfferService,
    MaterialGroupService,
    AgreementRepository,
    OfferRepository,
    MaterialGroupRepository,
    ProviderRepository,

  ],
})
export class AppModule {}
