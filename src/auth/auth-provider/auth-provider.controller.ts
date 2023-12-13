import { Controller, Post, Body, UseGuards } from "@nestjs/common";
import { AuthProviderService } from "./auth-provider.service";
import { SigninDto } from "src/dtos";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { ProviderSignupDto } from "../../dtos/provider-signup.dto";
import { AuthGuard } from "../guard/auth.guard";

@ApiBearerAuth()
@ApiTags('authentication-provider')
@Controller('provider/auth')
export class AuthProviderController {
constructor(private readonly authProviderService: AuthProviderService) {}

  @UseGuards(AuthGuard)
  @Post('signup')
  async signup(@Body() dto: ProviderSignupDto){
    return await this.authProviderService.signup(dto);
  }

  @Post('signin')
  async signin(@Body() dto: SigninDto){
    return await this.authProviderService.signin(dto);
  }
}