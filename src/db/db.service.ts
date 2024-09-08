import { Injectable } from '@nestjs/common';
import { Config, JsonDB } from 'node-json-db';

@Injectable()
export class DbService {
  private db: JsonDB;
  constructor() {
    this.db = new JsonDB(new Config('myDataBase', true, false, '/'));
  }

  // Create 데이터 추가
  create<T>(path: string, data: T): void {
    this.db.push(path, data, true)
  }

  read<T>(path: string) {
    return this.db.getData(path);
  }

  update<T>(path: string, data: T): void {
    this.db.push(path, data, false);
  }

  delete(path: string): void {
    this.db.delete(path)
  }
}
