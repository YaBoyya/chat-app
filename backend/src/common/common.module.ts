import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../entity/user.entity';
import { ContactEntity } from '../entity/contact.entity';
import { ProfileEntity } from '../entity/profile.entity';
import { GroupEntity } from '../entity/group.entity';
import { MessageEntity } from '../entity/message.entity';
import { UserGroupEntity } from '../entity/usergroup.entity';
import { UsersService } from '../models/users/user.service';
import { UsersController } from '../models/users/user.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ContactEntity,
      GroupEntity,
      MessageEntity,
      ProfileEntity,
      UserEntity,
      UserGroupEntity,
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class CommonModule {}
