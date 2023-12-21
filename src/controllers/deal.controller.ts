import { Body, Controller, Get, NotFoundException, Param, Post, Put, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiOkResponse, ApiParam, ApiProperty, ApiTags } from "@nestjs/swagger";
import { DealService } from "../services";

@ApiTags('deal')
@Controller('deal')
export class DealController {
  constructor(private readonly dealService: DealService) {}

  @Post('offer/:id')
  async create(@Param('id') offerId : number) {
      return await this.dealService.create(offerId);
  }

  @Get()
  async getAll(){
    return await this.dealService.getAll();
  }

  // @Put('update/:id')
  // async updateOfferById(
  //   @Param('id') materialGroupId: number,
  //   @Body() dto: CreateMaterialGroupDto,
  // )
  // {
  //   return await this.materialGroupService.updateById(materialGroupId, dto);
  // }
}