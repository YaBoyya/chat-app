import { Body, Controller, Patch, Post, Put, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { SignInDto } from './dto/signIn.dto';
import { changePasswordDTO } from './dto/changePassword.dto';
import { AuthGuard } from 'src/common/guards/authguard/authguard.guard';

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
  async changePassword(@Body() passwordData: changePasswordDTO) {
    return 0;
  }
} 
