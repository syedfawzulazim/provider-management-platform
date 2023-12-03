import { IsEmail, IsNotEmpty, IsString, IsLowercase } from 'class-validator';

export class AuthDto{
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  @IsLowercase()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}