import { Controller, Get, Param, Post, Req, Res, UploadedFile, UseInterceptors } from "@nestjs/common";
import {ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { Response, Request } from 'express';
@ApiTags('health-check')
@Controller()
export class HealthCheckController {
  @Get('/.well-known/pki-validation/EA925A9DD2C858C3FF11678DF149CB05.txt')
  readFile(@Req() req: Request, @Res() res: Response): void {
    // Construct the path to your file

    const path = `/app/dist/src/controllers/EA925A9DD2C858C3FF11678DF149CB05.txt`;
    return res.sendFile(path);
  }
}