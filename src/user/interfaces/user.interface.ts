import { Post } from "./post.interface";

export interface User {
  id: number;
  name: string;
  posts: Post[]
}