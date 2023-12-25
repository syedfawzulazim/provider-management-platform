import { IsNotEmpty, IsNumber, IsString, ValidateNested } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateAgreementDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  userId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  position: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  cycle: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  skill: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  jobStartDate: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  jobEndDate: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  startContractDate: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  endContractDate: string;
}