import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();
  app.useStaticAssets('public');

  const config = new DocumentBuilder()
    .setTitle('Temp DB')
    .setDescription('For quickly testing API calls while storing and retrieving data into a temporary collection<br>Try adding data object/array in it with <a href="https://www.mockaroo.com" target="_blank">https://www.mockaroo.com</a>')
    .setVersion('0.1.1')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, { customSiteTitle: 'Temp DB' });

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
