import { CanActivate, ExecutionContext, ForbiddenException, Injectable, UnauthorizedException } from "@nestjs/common";
import { Observable } from "rxjs";
import { AuthService } from "src/auth/auth.service";

// TODO replace with passwport lib?
@Injectable()
export class AuthGuard implements CanActivate{
  constructor(private readonly authService: AuthService) {}

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const request = context.switchToHttp().getRequest();
      const { authorization }: any = request.headers;
      console.log(request.headers, authorization)
      if (!authorization || authorization.trim() === ''){
        throw new UnauthorizedException('Please provide authorization token.');
      }
      const authToken = authorization.replace(/bearer/gim, '').trim();
      const resp = this.authService.validateToken(authToken);
      console.log("resp", resp);
      request.decodedData = resp;
      return true;

    } catch(error) {
      console.log('auth error - ', error.message);
      throw new ForbiddenException(error.message || 'Session expired! Please sign in.')
    }
  }
}