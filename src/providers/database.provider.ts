import { createConnection } from 'typeorm';
import { UserEntity } from '../entities/user.entity';

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
        database: 'taskmanagement',
        entities: [UserEntity],
        synchronize: true,
      }),
  },
];
