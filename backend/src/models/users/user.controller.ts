import { Controller, Get, UseGuards } from '@nestjs/common';
import { User } from 'src/common/decorators/user/user.decorator';
import { AuthGuard } from 'src/common/guards/authguard/authguard.guard';
import { UserEntity } from 'src/entity/user.entity';
import { UsersService } from 'src/models/users/user.service';

@Controller('user')
export class UsersController {
  constructor(private userService: UsersService){}
}
