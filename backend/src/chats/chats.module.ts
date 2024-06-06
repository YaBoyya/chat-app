import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm/user.entity';
import { Contact } from './typeorm/contact.entity';
import { Profile } from './typeorm/profile.entity';
import { Group } from './typeorm/group.entity';
import { Message } from './typeorm/message.entity';
import { UserGroup } from './typeorm/usergroup.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Contact,
      Group,
      Message,
      Profile,
      User,
      UserGroup,
    ]),
  ]
})
export class ChatsModule {}
