import { Injectable, UnauthorizedException } from '@nestjs/common';
import { RegisterParams } from './utils/types';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/common/services/user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
  ){}

  async signIn(username: string, password: string){
    const user = await this.userService.findOneByUsername(username);

    if (!bcrypt.compareSync(password, user.password)){
      throw new UnauthorizedException();
    }
    const payload = {
      sub: user.uuid, username: user.username
    }

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  logout(){}

  async register(registerData: RegisterParams){
    const hashedPassword = await this.hashPassword(registerData.password);
    registerData.password = hashedPassword;
    return await this.userService.createUser(registerData);
  }

  async hashPassword(password: string){
    const salt: number = await bcrypt.genSalt();
    return await bcrypt.hash(password, salt);
  }

  changePassword(){}
}
