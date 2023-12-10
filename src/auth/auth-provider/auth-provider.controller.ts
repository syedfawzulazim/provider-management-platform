import { Controller, Post, Body, UseGuards } from "@nestjs/common";
import { AuthProviderService } from "./auth-provider.service";
import { SigninDto } from "src/dtos";
import { ApiTags } from "@nestjs/swagger";
import { ProviderSignupDto } from "../../dtos/provider-signup.dto";


@ApiTags('authentication-provider')
@Controller('auth/provider')
export class AuthProviderController {
constructor(private readonly authService: AuthProviderService) {}

  //@UseGuards(AuthGuard)
  @Post('signup')
  async signup(@Body() dto: ProviderSignupDto){
    return await this.authService.signup(dto);
  }

  @Post('signin')
  async signin(@Body() dto: SigninDto){
    return await this.authService.signin(dto);
  }
}