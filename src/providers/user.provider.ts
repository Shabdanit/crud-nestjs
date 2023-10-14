import { Provider } from '@nestjs/common';
import { Connection } from 'typeorm/connection/Connection';
import { UserEntity } from '../entities/user.entity';

export const userProvider: Provider[] = [
  {
    provide: 'USERS_REPOSITORY',
    useFactory: (connection: Connection) =>
      connection.getRepository(UserEntity),
    inject: ['DATABASE_CONNECTION'],
  },
];
