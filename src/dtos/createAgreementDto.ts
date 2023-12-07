import { DeadlineDto } from "../dtos";
import { IsArray, IsDateString, IsNotEmpty, IsNumber, IsString, ValidateNested } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";


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
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsArray()
  skills: string[];

  @ApiProperty()
  @IsDateString()
  validFrom: string;

  @ApiProperty()
  @IsDateString()
  validUntil: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  cycle: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  materialGroup: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  dailyRateIndicator: string;

  @ApiProperty({ type: () => DeadlineDto })
  @ValidateNested({ each: true })
  @Type(() => DeadlineDto)
  @IsNotEmpty()
  deadline: DeadlineDto;
}