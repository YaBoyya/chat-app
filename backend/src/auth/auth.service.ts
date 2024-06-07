import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';
import { RegisterParams } from './utils/types';

@Injectable()
export class AuthService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>){}

  login(){}

  logout(){}

  register(registerData: RegisterParams){
    const user = this.userRepository.create(registerData);
    // TODO add password hashing
    return this.userRepository.save(user);
  }

  changePassword(){}
}
