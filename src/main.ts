import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { name, version } from '../package.json';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  setupSwagger(app);
  app.use(helmet());
  await app.listen(process.env.PORT ?? 3000);
}

function setupSwagger(app: NestExpressApplication): void {
  const swaggerOptions = new DocumentBuilder()
    .setTitle(`${name} API`)
    .setDescription(`Documentation for ${name} API`)
    .setVersion(version)
    .build();
  const document = SwaggerModule.createDocument(app, swaggerOptions);

  SwaggerModule.setup('/documentation', app, document);
}
bootstrap();
