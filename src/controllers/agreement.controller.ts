import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateAgreementDto } from "../dtos";
import { ApiTags } from "@nestjs/swagger";
import { AgreementService } from "../services/agreement.service";

@ApiTags('agreement')
@Controller('agreement')
export class AgreementController {

  constructor(private readonly agreementService: AgreementService) {}

  @Post()
  async saveAgreement(@Body() dto: CreateAgreementDto){
      return await this.agreementService.create(dto);
  }

  @Get()
  async getAllAgreement(){

  }
}