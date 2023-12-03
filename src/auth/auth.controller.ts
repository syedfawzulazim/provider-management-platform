import { Controller, Post, Get, Body } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "src/dtos";

@Controller('auth')
export class AuthController{
constructor(private authService: AuthService) {}

  @Post('signup')
  async signup(@Body() dto: AuthDto){
    return await this.authService.signup(dto);
  }

  @Get('signin')
  async signin(){
    return this.signin();
  }
}