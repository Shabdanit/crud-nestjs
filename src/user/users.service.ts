import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { HistoryService } from 'src/history/hisory.service';
import { InsertResult, Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: Repository<User>,
    private historyService: HistoryService,
  ) {}

  async getUsers(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async createUser(user: User): Promise<InsertResult> {
    const result = this.usersRepository.insert(user);
    await this.historyService.createHistory(user, 'User created');
    return result;
  }

  async getUser(id: number): Promise<User> {
    return this.usersRepository.findOne({
      where: { id: id },
    });
  }

  async updateUser(id: number, user: User): Promise<User> {
    const userToUpdate = await this.getUser(id);
    if (!userToUpdate === undefined) {
      throw new NotFoundException();
    }
    const previousUserData = { ...userToUpdate };
    await this.usersRepository.update(id, user);
    await this.historyService.createHistory(previousUserData, 'User updated');
    return this.getUser(id);
  }
}
