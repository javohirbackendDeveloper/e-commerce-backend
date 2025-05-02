import { NestFactory } from '@nestjs/core';
import { ProductsServiceModule } from './products-service.module';

async function bootstrap() {
  const app = await NestFactory.create(ProductsServiceModule);
  const PORT = process.env.PORT || 3000;
  await app.listen(PORT, () => {
    console.log(`Product-Service is running at ` + PORT);
  });
}
bootstrap();
