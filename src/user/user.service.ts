import { Injectable } from '@nestjs/common';
import { Post } from './interfaces/post.interface';
import { User } from './interfaces/user.interface';
import { UserRepository } from './user.repository';
import { ApiUserPostRequestBodyDto } from './dto/api-user-post-request-body.dto';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) { }

  async createUser(dto:ApiUserPostRequestBodyDto ): Promise<User> {
    return this.userRepository.createUser(dto)
  }

  async addPost(userId: number, title: string, content: string): Promise<Post> {
    return this.userRepository.addPost(userId, title, content);
  }

  async deleteUser(userId: number): Promise<void> {
    return this.userRepository.deleteUser(userId);
  }
}
