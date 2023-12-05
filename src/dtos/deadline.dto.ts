import { IsDate } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";

export class DeadlineDto {
  @ApiProperty()
  @IsDate()
  @Transform(({ value }) => new Date(value))
  deadline: Date;

  @ApiProperty()
  @IsDate()
  @Transform(({ value }) => new Date(value))
  teamDeadline: Date;

  @ApiProperty()
  @IsDate()
  @Transform(({ value }) => new Date(value))
  contractDeadline: Date;
}