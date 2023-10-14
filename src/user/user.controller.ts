import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserEntity } from 'src/entities/user.entity';

@Controller()
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getAllUsers(): Promise<UserEntity[]> {
    return this.usersService.getUsers();
  }

  @Post()
  create(@Body() user: UserEntity) {
    console.log(user);
    return this.usersService.createUser(user);
  }

  @Get(':id')
  getUser(@Param('id') id: string): Promise<UserEntity> {
    return this.usersService.getUser(Number(id));
  }

  @Patch(':id')
  updateUser(
    @Param('id') id: string,
    @Body() user: UserEntity,
  ): Promise<UserEntity> {
    return this.usersService.updateUser(Number(id), user);
  }
}
