import { BadRequestException, Body, Controller, Patch, Post, Put, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { SignInDto } from './dto/signIn.dto';
import { ChangePasswordDTO } from './dto/changePassword.dto';
import { AuthGuard } from 'src/common/guards/authguard/auth.guard';
import { User } from 'src/common/decorators/user/user.decorator';
import { UserEntity } from 'src/entity/user.entity';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
  ){}

  @Post('register')
  async register(@Body() user: RegisterDto) {
    return await this.authService.register(user);
  } 

  // TODO Sign in with email and sign in with username - 2 possibilities
  @Post('login')
  async signIn(@Body() user: SignInDto) {
    return this.authService.signIn(user.username, user.password);
  }

  @Patch('change-password')
  @UseGuards(AuthGuard)
  async changePassword(@Body() passwordData: ChangePasswordDTO, @User() user: UserEntity) {
    if (!this.authService.checkPassword(passwordData.oldPassword, user.password)){
      throw new BadRequestException("Invalid password.")
    }
    if (this.authService.checkPassword(passwordData.newPassword, user.password)){
      throw new BadRequestException("You can't change your password to the current one.")
    }
    this.authService.changePassword(user, passwordData.newPassword);
  }
} 
