import { Injectable, UnauthorizedException } from '@nestjs/common';
import { RegisterParams } from './utils/types';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/models/users/user.service';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from 'src/entity/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UsersService,
  ){}

  async signIn(username: string, password: string){
    const user = await this.userService.findOneByUsername(username);

    if (!this.checkPassword(password, user.password)){
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

  async changePassword(user: UserEntity, password: string){
    const hashedPassword = await this.hashPassword(password)
    return this.userService.updatePassword(user.uuid, hashedPassword);
  }

  checkPassword(password: string, hashedPassword: string) {
    return bcrypt.compareSync(password, hashedPassword)
  }

  async hashPassword(password: string){
    const salt: number = await bcrypt.genSalt();
    return await bcrypt.hash(password, salt);
  }

  validateToken(token: string) {
    return this.jwtService.verify(token, {
      secret: process.env.SECRET_KEY
    })
  }
}
