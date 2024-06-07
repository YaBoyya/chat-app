import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';
import { RegisterParams } from './utils/types';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>){}

  login(){}

  logout(){}

  async register(registerData: RegisterParams){
    const hashedPassword = await this.hashPassword(registerData.password);
    registerData.password = hashedPassword;
    const user = this.userRepository.create(registerData);
    return this.userRepository.save(user);
  }

  async hashPassword(password: string){
    const salt: number = await bcrypt.genSalt();
    return await bcrypt.hash(password, salt);
  }

  changePassword(){}
}
