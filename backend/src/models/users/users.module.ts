import { Module } from '@nestjs/common';
import { CommonModule } from 'src/common/common.module';
import { UsersController } from './user.controller';
import { UsersService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/entity/user.entity';
import { ProfileEntity } from 'src/entity/profile.entity';

@Module({
  imports: [
    CommonModule,
    TypeOrmModule.forFeature([UserEntity, ProfileEntity]),
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
