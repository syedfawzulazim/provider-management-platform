import { IsEmail, IsNotEmpty, IsString, IsLowercase } from 'class-validator';

export class SigninDto{
  @IsEmail()
  @IsNotEmpty()
  @IsLowercase()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}