import { INestApplication, Logger, ValidationPipe } from "@nestjs/common";
import { AppModule } from './app.module';
import { writeFileSync } from 'fs';
import * as path from 'path';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as fs from 'fs'
import { ExpressAdapter } from "@nestjs/platform-express";
import express from "express";
import * as http from "http";
import * as https from "https";

async function bootstrap(): Promise<INestApplication> {
  const logger = new Logger('boostrap');

  const privateKey = fs.readFileSync(__dirname + '/cert/private.key', 'utf-8');
  const certificateKey = fs.readFileSync(__dirname + '/cert/certificate.crt', 'utf-8');
  const httpsOptions = {
    key: privateKey,
    cert: certificateKey,
  };
  const server = express();
  const app = await NestFactory.create(AppModule,new ExpressAdapter(server), { cors: true });

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Provider-management-platform')
    .setDescription('API to handle everything related to provider-management')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  const outputPath = path.resolve(process.cwd(), 'swagger.json');
  writeFileSync(outputPath, JSON.stringify(document, null, 4), {
    encoding: 'utf8',
  });

  if (process.env.DATABASE_MIGRATION !== 'true') {
    await app.init();

      http.createServer(server).listen(process.env.PORT);
      https.createServer(httpsOptions, server).listen(8443);

    logger.log(`Application listening ports: ${process.env.PORT}`);
  } else {
    logger.log('Close application due to migrations');
    await app.close();
    process.exit(0);
  }
  return app;
}
bootstrap().catch((error) => {
  console.log(error?.message, error?.stack);
});

