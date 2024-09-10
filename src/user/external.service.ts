import { InternalServerErrorException } from "@nestjs/common";
import axios from "axios";
import { ERROR } from '../constant/error'

export class ExternalService {
  async fetchExternalData(): Promise<any> {
    try {
      const response = await axios.get('https://naver.com');
      return response.data;
    } catch (e) {
      if (axios.isAxiosError(e)) {
        // axios 에러인 경우 처리
        const errorMessage = e.response?.data?.message || e.message;
        throw new InternalServerErrorException(ERROR.EXTERNAL_API_ERROR);
      } else {
        // 일반 에러 처리
        throw new InternalServerErrorException(ERROR.INTERNAL_SERVER_ERROR)
      }
    }
  }
}