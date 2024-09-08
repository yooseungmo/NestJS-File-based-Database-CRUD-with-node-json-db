import { Injectable } from '@nestjs/common';
import { Post } from './interfaces/post.interface';
import { User } from './interfaces/user.interface';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) { }

  async createUser(name: string): Promise<User> {
    return this.userRepository.createUser(name)
  }

  async addPost(userId: number, title: string, content: string): Promise<Post> {
    return this.userRepository.addPost(userId, title, content);
  }

  async deleteUser(userId: number): Promise<void> {
    return this.userRepository.deleteUser(userId);
  }
}
