import { Connection } from 'typeorm';
import { History } from 'src/entities/history.entity';

export const historyProvider = [
  {
    provide: 'HISTORY_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(History),
    inject: ['DATABASE_CONNECTION'],
  },
];
