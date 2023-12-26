import { Controller, Post, Body, UseGuards, Param } from "@nestjs/common";
import { AuthProviderService } from "./auth-provider.service";
import { UpdateReviewDto } from "src/dtos";
import { ApiTags } from "@nestjs/swagger";
import { ProviderSignupDto } from "../../dtos/provider-signup.dto";

@ApiTags('provider')
@Controller('provider')
export class AuthProviderController {
constructor(private readonly authProviderService: AuthProviderService) {}

  @Post('create')
  async signup(@Body() dto: ProviderSignupDto){
    return await this.authProviderService.create(dto);
  }



  @Post('/:id/review')
  async review(
    @Param('id') id: number,
    @Body() dto: UpdateReviewDto
  )
  {
    return await this.authProviderService.review(id, dto);
  }

  // @Post('signin')
  // async signin(@Body() dto: SigninDto){
  //   return await this.authProviderService.signin(dto);
  // }
}