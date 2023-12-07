import {IsDateString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class DeadlineDto {
  @ApiProperty()
  @IsDateString()
  deadline: string;

  @ApiProperty()
  @IsDateString()
  teamDeadline: string;

  @ApiProperty()
  @IsDateString()
  contractDeadline: string;
}