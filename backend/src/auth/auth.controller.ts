import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { SignInDto } from './dto/signIn.dto';

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
}
