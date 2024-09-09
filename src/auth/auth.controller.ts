import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthRequest } from './models/AuthRequest';
import { isPublic } from './decorators/is-public.decorator';

@Controller('')
export class AuthController {
  constructor(private readonly authservice: AuthService) {}

  @isPublic()
  @Post('login')
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  login(@Request() req: AuthRequest) {
    console.log(req);
    console.log(req.user);

    return this.authservice.login(req.user);
    // return this.authservice.login();
  }
}
