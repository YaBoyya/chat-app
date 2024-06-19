import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>){}

  findOneByUsernameWithPassword(username: string) {
    const user = this.userRepository.findOne({
      where: { username: username },
      select: {
        uuid: true,
        username: true,
        password: true,
        createdAt: true
      }
    });
    return user;
  }

  findUserWithProfileByUUID(uuid: string) {
    return this.userRepository.findOneBy({ uuid: uuid });
  }

  async createUser(userData: Partial<UserEntity>) {
    const user = this.userRepository.create({...userData, profile: {}});
    return this.userRepository.save(user);
  }

  deleteUser(uuid: string) {
    return this.userRepository.delete({ uuid: uuid });
  }

  updatePassword(uuid: string, password: string) {
    return this.userRepository.update({ uuid: uuid }, { password: password })
  }
}
