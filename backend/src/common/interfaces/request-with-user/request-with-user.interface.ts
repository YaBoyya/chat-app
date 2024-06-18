import { UserEntity } from "src/entity/user.entity";

export interface RequestWithUser extends Request {
  user: UserEntity | Promise<UserEntity>;
}
