import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { userProvider } from 'src/providers/user.provider';
import { UsersService } from './users.service';
import { UsersController } from './user.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [...userProvider, UsersService],
})
export class UsersModule {}
