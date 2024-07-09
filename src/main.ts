import { NestFactory } from '@nestjs/core';
import * as fs from 'fs';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { environment } from './config/configuration';
import * as yaml from 'js-yaml';
import { GlobalExceptionFilter } from './errorhandler/error';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new GlobalExceptionFilter());

  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('notificaciones_crud')
    .setDescription('API CRUD sistema de notificaciones')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  fs.writeFileSync('./swagger/swagger.json', JSON.stringify(document, null, 4));
  fs.writeFileSync('./swagger/swagger.yml', yaml.dump(document));
  SwaggerModule.setup('api', app, document);

  await app.listen(parseInt(environment.HTTP_PORT,10) || 8080);
}
bootstrap();
