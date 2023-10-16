import { createConnection } from 'typeorm';
import { User } from '../entities/user.entity';
import { History } from '../entities/history.entity';

export const databaseProvider = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '1101',
        database: 'postgres',
        entities: [User, History],
        synchronize: true,
        logging: true,
      }),
  },
];
//asdasd
