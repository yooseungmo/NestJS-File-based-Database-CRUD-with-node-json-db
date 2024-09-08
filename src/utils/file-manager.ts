import { Config, JsonDB } from "node-json-db";
import * as fsExtra from 'fs-extra';
import { ERROR } from "src/constant/error";
import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";


@Injectable()
export class FileManager {
  private db: JsonDB;
  private lockFilePath: string;

  constructor(private readonly filePath: string = 'myDataBase') {
    if (!filePath) {
      throw new NotFoundException(ERROR.NOT_EXIST_DATA)      // 경로가 없을 때 에러 처리
    }
    this.db = new JsonDB(new Config(filePath, true, false, '/'))
    this.lockFilePath = `${filePath}.lock`;
  }

  // 파일 잠금 처리
  private async lockFile(): Promise<void> {
    while (true) {
      try {
        await fsExtra.ensureFile(this.lockFilePath); // 잠금파일 생성
        break;
      } catch {
        await new Promise((resolve) => setTimeout(resolve, 100)) // 실패 시 대기
      }
    }
  }

  // 파일 잠금 해제
  private async unlockFile(): Promise<void> {
    await fsExtra.remove(this.lockFilePath); // 잠금 파일 삭제
  }

  // 데이터 읽기
  async readData<T>(path: string): Promise<T> {
    await this.lockFile();
    try {
      return this.db.getData(path);
    } catch (e) {
      throw new ConflictException(ERROR.FILE_LOCK_FAILED);
    } finally {
      await this.unlockFile();
    }
  }

  // 데이터 쓰기
  async writeData<T>(path: string, data: T): Promise<void> {
    await this.lockFile();
    try {
      this.db.push(path, data, true);
    } catch (e) {
      throw new ConflictException(ERROR.FILE_LOCK_FAILED);
    } finally {
      await this.unlockFile();
    }
  }

  async deleteData(path: string): Promise<void> {
    await this.lockFile();
    try {
      this.db.delete(path)
    } catch (e) {
      throw new ConflictException(ERROR.FILE_LOCK_FAILED);
    } finally {
      await this.unlockFile()
    }
  }
}