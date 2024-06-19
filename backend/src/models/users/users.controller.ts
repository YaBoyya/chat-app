import { Controller, Get, UseGuards } from '@nestjs/common';
import { UsersService } from 'src/models/users/users.service';

@Controller('user')
export class UsersController {
  constructor(private userService: UsersService){}
}
