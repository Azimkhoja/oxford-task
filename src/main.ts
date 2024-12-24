import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as dotenv from 'dotenv'

dotenv.config() // dotenv varianti environment ozgaruvchilarni ishlatish uchun 
//const configService = app.get(ConfigService) // configservice bu ham env variablelarni ishlatish uchun  

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  
  const port = process.env.PORT
  console.log(process.env.DB_DATABASE)

  await app.listen(port ?? 3000, () => {
    console.log(`server started on port ${port}`)}
    );
}
bootstrap();
