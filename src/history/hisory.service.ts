// user-activity.service.ts

import { Injectable, Inject } from '@nestjs/common';
import { Repository, InsertResult, Equal } from 'typeorm';
import { History } from '../entities/history.entity';
import { User } from '../entities/user.entity';

@Injectable()
export class HistoryService {
  constructor(
    @Inject('HISTORY_REPOSITORY')
    private historyRepository: Repository<History>,
  ) {}

  async createHistory(user: User, action: string): Promise<InsertResult> {
    const history = new History();
    history.user = user;
    history.action = action;
    history.createdAt = new Date();
    return this.historyRepository.insert(history);
  }

  async getHistoryByUserId(userId: number): Promise<History[]> {
    return this.historyRepository.find({
      where: { user: Equal(userId) },
      order: { createdAt: 'DESC' },
    });
  }
}
