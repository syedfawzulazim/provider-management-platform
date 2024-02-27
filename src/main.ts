import { INestApplication, Logger, ValidationPipe } from "@nestjs/common";
import { AppModule } from './app.module';
import { writeFileSync } from 'fs';
import * as path from 'path';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as fs from 'fs'

async function bootstrap(): Promise<INestApplication> {
  const logger = new Logger('boostrap');

  const cakey = fs.readFileSync(__dirname + '/cert/ca_bundle.crt', 'utf-8');
  const privateKey = fs.readFileSync(__dirname + '/cert/private.key', 'utf-8');
  const certificateKey = fs.readFileSync(__dirname + '/cert/certificate.crt', 'utf-8');
  const httpsOptions = {
    ca: cakey,
    key: privateKey,
    cert: certificateKey,
  }

  const app = await NestFactory.create(AppModule, {httpsOptions});
  app.enableCors();

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
    await app.listen(process.env.PORT);

    logger.log(`Application listening port: ${process.env.PORT}`);
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