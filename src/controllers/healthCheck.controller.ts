import { Controller, Get, Param, Post, Req, Res, UploadedFile, UseInterceptors } from "@nestjs/common";
import {ApiOkResponse, ApiTags } from "@nestjs/swagger";
import * as fs from 'fs'
import { Response, Request } from 'express';

@ApiTags('health-check')
@Controller()
export class HealthCheckController {
  @Get('/.well-known/pki-validation/3F00D98897171B414412A628E1E4A306.txt')
  readFile(@Req() req: Request, @Res() res: Response): void {
    // Construct the path to your file
    const path = `${process.cwd()}/src/.well-known/pki-validation/3F00D98897171B414412A628E1E4A306.txt`;
    return res.sendFile(path);
  }
}
