import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthUserDto } from './dto/auth-user.dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @HttpCode(200)
  login(@Body() authUserDto: AuthUserDto) {
    throw new HttpException(
      {
        status: HttpStatus.BAD_REQUEST,
        message: 'This is a custom message',
        errors: authUserDto,
      },
      HttpStatus.BAD_REQUEST,
    );
  }
}
