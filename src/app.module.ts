import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './user/users.module';
import { RouterModule } from '@nestjs/core';
import { HistoryModule } from './history/history.module';

@Module({
  imports: [
    UsersModule,
    HistoryModule,
    RouterModule.register([
      {
        path: 'api/users',
        module: UsersModule,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
