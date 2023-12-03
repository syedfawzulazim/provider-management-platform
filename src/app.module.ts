import { Module } from '@nestjs/common';
import { AuthModule } from "./auth/auth.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import typeOrmConfig from "./config/typeorm.config";

@Module({
  imports: [AuthModule, TypeOrmModule.forRoot(typeOrmConfig)],
  controllers: [],
  providers: [],
})
export class AppModule {}
