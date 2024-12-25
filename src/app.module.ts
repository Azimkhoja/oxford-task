import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auth } from './auth/entities/auth.entity';


@Module({
  imports: [AuthModule, ConfigModule.forRoot({isGlobal:true}), 
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Auth],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Auth])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
