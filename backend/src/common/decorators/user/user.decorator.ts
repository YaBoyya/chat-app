import { BadRequestException, ExecutionContext, SetMetadata, createParamDecorator } from '@nestjs/common';

export const User = createParamDecorator(
  async (data: unknown, ctx: ExecutionContext) => {
    const request = await ctx.switchToHttp().getRequest();
    if (request.user === null) {
      throw new BadRequestException("User is null. User might not exist.")
    }
    return request.user;
  },
);
