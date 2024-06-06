import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common/common.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfigService } from './config/config.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseConfigService.getTypeOrmConfig()),
    CommonModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
