import { InternalServerErrorException } from "@nestjs/common";
import axios from "axios";

export class ExternalService {
  async fetchExternalData(): Promise<any> {
    try {
      const response = await axios.get('https://naver.com');
      return response.data;
    } catch (e) {
      if (axios.isAxiosError(e)) {
        // axios 에러인 경우 처리
        const errorMessage = e.response?.data?.message || e.message;
        throw new InternalServerErrorException(`외부 API 호출 실패: ${errorMessage}`);
      } else {
        // 일반 에러 처리
        throw new InternalServerErrorException('알 수 없는 에러 발생');
      }
    }
  }
}