import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entity/user.entity';
import { Contact } from '../entity/contact.entity';
import { Profile } from '../entity/profile.entity';
import { Group } from '../entity/group.entity';
import { Message } from '../entity/message.entity';
import { UserGroup } from '../entity/usergroup.entity';
import { UserService } from './services/user/user.service';

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
  ],
  controllers: [],
  providers: [UserService]
})
export class CommonModule {}
