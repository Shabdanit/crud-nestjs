import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { UserEntity } from 'src/entities/user.entity';
import { DeleteResult, InsertResult, Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: Repository<UserEntity>,
  ) {}

  async getUsers(): Promise<UserEntity[]> {
    return this.usersRepository.find();
  }

  async createUser(user: UserEntity): Promise<InsertResult> {
    return this.usersRepository.insert(user);
  }

  async getUser(id: number): Promise<UserEntity> {
    return this.usersRepository.findOne({
      where: { id: id },
    });
  }

  async updateUser(id: number, user: UserEntity): Promise<UserEntity> {
    const userToUpdate = await this.getUser(id);
    if (userToUpdate === undefined) {
      throw new NotFoundException();
    }
    await this.usersRepository.update(id, user);
    return this.getUser(id);
  }

  async deleteUser(id: number): Promise<DeleteResult> {
    const userToUpdate = await this.getUser(id);
    if (userToUpdate === undefined) {
      throw new NotFoundException();
    }
    return this.usersRepository.delete(id);
  }
}
