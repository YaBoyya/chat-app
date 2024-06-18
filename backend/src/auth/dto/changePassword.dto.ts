import { IsNotEmpty, IsString, IsStrongPassword } from "class-validator";
import { Match } from "src/common/decorators/match/match.decorator";

export class changePasswordDTO {
  @IsNotEmpty()
  @IsString()
  oldPassword: string;

  @IsNotEmpty()
  @IsString()
  @IsStrongPassword()
  newPassword: string;

  @IsNotEmpty()
  @IsString()
  @Match('newPassword')
  @IsStrongPassword()
  confirmPassword: string;
}