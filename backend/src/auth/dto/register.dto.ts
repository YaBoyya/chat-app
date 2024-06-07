import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from "class-validator";
import { Match } from "src/common/decorators/match/match.decorator";

// TODO data trimming pipe or sth like that
// TODO Add more strict password validation, most likely with regex with Matches decorator
export class RegisterDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @IsStrongPassword()
  password: string;

  @Match('password')
  @IsString()
  @IsStrongPassword()
  confirmPassword: string;
}