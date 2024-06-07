import { IsEmail, IsNotEmpty, IsString, IsStrongPassword, Matches, MinLength } from "class-validator";

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
}