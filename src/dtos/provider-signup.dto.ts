import { IsEmail, IsNotEmpty, IsString, IsLowercase, IsDateString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class ProviderSignupDto{
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  @IsLowercase()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  address: string;

  @ApiProperty()
  @IsDateString()
  existsSince: string;

  @ApiProperty()
  @IsDateString()
  validFrom: string;

  @ApiProperty()
  @IsDateString()
  validUntil: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  masterAgreementType: string;
}