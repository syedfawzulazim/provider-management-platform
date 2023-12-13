import { Body, Controller, Get, NotFoundException, Param, Post, Put, UseGuards } from "@nestjs/common";
import { CreateAgreementDto } from "../dtos";
import { ApiBearerAuth, ApiOkResponse, ApiParam, ApiProperty, ApiTags } from "@nestjs/swagger";
import { AgreementService } from "../services/agreement.service";
import { AuthGuard } from "../auth/guard/auth.guard";
import { AgreementModel } from "../models/agreement.model";

@ApiBearerAuth()
@ApiTags('agreement')
@Controller('agreement')
export class AgreementController {
  constructor(private readonly agreementService: AgreementService) {}

  @UseGuards(AuthGuard)
  @Post()
  async saveAgreement(@Body() dto: CreateAgreementDto):Promise<AgreementModel>{
      return await this.agreementService.create(dto);
  }

  @Get()
  async getAllAgreement():Promise<AgreementModel[]>{
    return await this.agreementService.getAll()
  }

  @Get('/:id')
  async getAgreementById(@Param('id') id: number):Promise<AgreementModel>{
    return await this.agreementService.getAgreementById(id);
  }

  @UseGuards(AuthGuard)
  @Put('update/:id')
  async updateAgreementById(
    @Param('id') id: number,
    @Body() dto: CreateAgreementDto):Promise<AgreementModel>
  {
    return await this.agreementService.updateAgreementById(id, dto);
  }
}