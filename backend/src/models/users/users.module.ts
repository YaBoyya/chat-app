import { Module } from '@nestjs/common';
import { CommonModule } from 'src/common/common.module';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/entity/user.entity';
import { ProfileEntity } from 'src/entity/profile.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    AuthModule,
    CommonModule,
    TypeOrmModule.forFeature([UserEntity, ProfileEntity]),
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
