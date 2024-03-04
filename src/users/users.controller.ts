import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/createUser.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post()
  @UsePipes(ValidationPipe)
  createUser(@Body() data: CreateUserDto) {
    return this.userService.createUser(data);
  }

  @Get()
  getUsers() {
    return this.userService.getAllUsers();
  }

  @Get()
  async getUserById(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.getUserById(id);
  }

  
}
