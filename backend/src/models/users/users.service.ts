import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>){}

  findOneByUsername(username: string) {
    return this.userRepository.findOneBy({ username: username });
  }

  async createUser(userData: Partial<UserEntity>) {
    const user = this.userRepository.create({...userData, profile: {}});
    return this.userRepository.save(user);
  }

  updatePassword(uuid: string, password: string) {
    return this.userRepository.update({ uuid: uuid }, {password: password })
  }
}
