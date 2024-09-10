import { Injectable, NotFoundException } from "@nestjs/common";
import { ERROR } from "src/constant/error";
import { FileManager } from "src/utils/file-manager";
import { Post } from "./interfaces/post.interface";
import { User } from "./interfaces/user.interface";
import { ApiUserPostRequestBodyDto } from "./dto/api-user-post-request-body.dto";

@Injectable()
export class UserRepository {
  private usersPath = '/users';

  constructor(private readonly fileManager: FileManager) { }

  async getAllUsers(): Promise<User[]> {
    const users = await this.fileManager.readData<User[]>(this.usersPath);
    return Array.isArray(users) ? users : [];  // 배열인지 확인하고, 아니면 빈 배열 반환
  }

  async createUser(dto:ApiUserPostRequestBodyDto): Promise<User> {
    const users = await this.getAllUsers();
    const newUser: User = {
      id: users.length ? users[users.length - 1].id + 1 : 1,
      name: dto.name,
      posts: []
    };
    users.push(newUser);
    await this.fileManager.writeData(this.usersPath, users);
    return newUser
  }

  async addPost(userId: number, title: string, content: string): Promise<Post> {
    const users = await this.getAllUsers();
    const user = users.find((u) => u.id === +userId);
    console.log(typeof userId)
    if (!user) {
      throw new NotFoundException(ERROR.USER_NOT_FOUND)
    }
    const newPost: Post = {
      postId: user.posts.length ? user.posts[user.posts.length - 1].postId + 1 : 1,
      title,
      content,
    };

    user.posts.push(newPost);
    console.log(this.usersPath)
    await this.fileManager.writeData(this.usersPath, users);

    return newPost
  }

  async deleteUser(userId: number): Promise<void> {
    let users = await this.getAllUsers();
    const userExists = users.some((user) => user.id === +userId);

    if (!userExists) {
      throw new NotFoundException(ERROR.USER_NOT_FOUND)
    }

    users = users.filter((user) => user.id !== +userId);
    await this.fileManager.writeData(this.usersPath, users)
  }
}