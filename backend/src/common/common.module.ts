import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../entity/user.entity';
import { ContactEntity } from '../entity/contact.entity';
import { ProfileEntity } from '../entity/profile.entity';
import { GroupEntity } from '../entity/group.entity';
import { MessageEntity } from '../entity/message.entity';
import { UserGroupEntity } from '../entity/usergroup.entity';
import { UserService } from '../models/users/user.service';
import { UserController } from '../models/users/user.controller';

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
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})
export class CommonModule {}
