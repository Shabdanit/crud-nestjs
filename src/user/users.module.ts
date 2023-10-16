import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { userProvider } from 'src/providers/user.provider';
import { UsersService } from './users.service';
import { UsersController } from './user.controller';
import { HistoryModule } from 'src/history/history.module';

@Module({
  imports: [DatabaseModule, HistoryModule],
  controllers: [UsersController],
  providers: [...userProvider, UsersService],
})
export class UsersModule {}
