import { Injectable } from '@nestjs/common';
import { RegisterParams } from './utils/types';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/common/services/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
  ){}

  login(){}

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
