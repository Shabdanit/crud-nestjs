import { Controller, Post, Param, Get, Body } from '@nestjs/common';
import { HistoryService } from './hisory.service';
import { User } from '../entities/user.entity';
import { History } from 'src/entities/history.entity';
import { InsertResult } from 'typeorm';

@Controller('user-activity')
export class HistoryController {
  constructor(private historyService: HistoryService) {}

  @Post('create/:userId')
  createHistory(
    @Param('userId') userId: number,
    @Body('action') action: string,
  ): Promise<InsertResult> {
    return this.historyService.createHistory({ id: userId } as User, action);
  }

  @Get('history/:userId')
  getHistory(@Param('userId') userId: number): Promise<History[]> {
    return this.historyService.getHistoryByUserId(userId);
  }
}
