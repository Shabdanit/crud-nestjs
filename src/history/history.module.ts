import { Module } from '@nestjs/common';
import { HistoryController } from './history.controller';
import { HistoryService } from './hisory.service';
import { historyProvider } from 'src/providers/history.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [HistoryController],
  providers: [...historyProvider, HistoryService],
  exports: [HistoryService],
})
export class HistoryModule {}
