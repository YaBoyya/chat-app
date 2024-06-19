import { Controller, Delete, Get, UseGuards } from '@nestjs/common';
import { User } from 'src/common/decorators/user/user.decorator';
import { AuthGuard } from 'src/common/guards/authguard/auth.guard';
import { UserEntity } from 'src/entity/user.entity';
import { UsersService } from 'src/models/users/users.service';

@Controller('user')
export class UsersController {
  constructor(private userService: UsersService){}

  @Get('profile')
  @UseGuards(AuthGuard)
  async getUserProfile(@User() user: UserEntity) {
    return await this.userService.findUserWithProfileByUUID(user.uuid);
  }

  @Delete('delete')
  @UseGuards(AuthGuard)
  async deleteUser(@User() user: UserEntity) {
    const deleteUser = await this.userService.deleteUser(user.uuid)
    return deleteUser;
  }
}
