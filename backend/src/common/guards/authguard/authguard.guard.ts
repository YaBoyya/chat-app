import { CanActivate, ExecutionContext, ForbiddenException, Injectable, UnauthorizedException } from "@nestjs/common";
import { Observable } from "rxjs";
import { AuthService } from "src/auth/auth.service";
import { RequestWithUser } from "src/common/interfaces/request-with-user/request-with-user.interface";
import { UserService } from "src/common/services/user/user.service";

// TODO replace with password lib?
@Injectable()
export class AuthGuard implements CanActivate{
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const request = context.switchToHttp().getRequest();
      const { authorization }: any = request.headers;

      if (!authorization || authorization.trim() === ''){
        throw new UnauthorizedException('Please provide authorization token.');
      }
      const authToken = authorization.replace(/bearer/gim, '').trim();
      const resp = this.authService.validateToken(authToken);

      this.addUserToRequest(resp.username, request)
      request.tokenData = resp;
      return true;
    } catch(error) {
      throw new ForbiddenException(error.message || 'Session expired! Please sign in.')
    }
  }

  addUserToRequest(username: string, request: RequestWithUser) {
    const user = this.userService.findOneByUsername(username)
    request.user = user;
  }
}