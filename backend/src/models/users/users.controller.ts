import { Controller, Get, UseGuards } from '@nestjs/common';
import { User } from 'src/common/decorators/user/user.decorator';
import { AuthGuard } from 'src/common/guards/authguard/auth.guard';
import { UserEntity } from 'src/entity/user.entity';
import { UsersService } from 'src/models/users/users.service';

@Controller('user')
export class UsersController {
  constructor(private userService: UsersService){}

  @Get('profile')
  @UseGuards(AuthGuard)
  getProfile(@User() user: UserEntity) {
    console.log(user.uuid);
    return this.userService.findUserWithProfileByUUID(user.uuid);
  }
}
