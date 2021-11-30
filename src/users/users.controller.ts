import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}

  @Get()
  get() {
    return this.service.getUsers();
  }

  @Get(':id')
  getOne(@Param() params) {
    return this.service.getUser(params.id);
  }
}
