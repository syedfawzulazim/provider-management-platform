import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { CreateAgreementDto } from "../dtos";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { AgreementService } from "../services/agreement.service";
import { AuthGuard } from "../auth/guard/auth.guard";

@ApiBearerAuth()
@ApiTags('agreement')
@Controller('agreement')
export class AgreementController {

  constructor(private readonly agreementService: AgreementService) {}

  @UseGuards(AuthGuard)
  @Post()
  async saveAgreement(@Body() dto: CreateAgreementDto){
      return await this.agreementService.create(dto);
  }

  @Get()
  async getAllAgreement(){

  }
}