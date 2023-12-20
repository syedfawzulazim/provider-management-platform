import { Module } from '@nestjs/common';
import { AuthModule } from "./auth/auth.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import typeOrmConfig from "./config/typeorm.config";
import { AgreementController, OfferController } from "./controllers";
import { AgreementService } from "./services/agreement.service";
import { JwtService } from "@nestjs/jwt";
import { AgreementRepository } from "./repositories/agreement.repository";
import { OfferService } from "./services/offer.service";
import { OfferRepository } from "./repositories/offer.repository";
import { ProviderRepository } from "./repositories/provider.repository";

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot(typeOrmConfig)
  ],
  controllers: [
    AgreementController,
    OfferController
  ],
  providers: [
    JwtService,
    AgreementService,
    OfferService,
    AgreementRepository,
    OfferRepository,
    ProviderRepository,
  ],
})
export class AppModule {}
