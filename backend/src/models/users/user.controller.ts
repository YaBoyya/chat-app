import { Controller } from '@nestjs/common';
import { UserService } from 'src/models/users/user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService){}
  
}
