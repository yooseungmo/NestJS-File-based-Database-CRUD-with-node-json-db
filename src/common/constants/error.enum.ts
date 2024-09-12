export enum ERROR {
  // 서버 관련 에러
  INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',         // 알 수 없는 서버 에러
  DATABASE_CONNECTION_FAILED = 'DATABASE_CONNECTION_FAILED', // 데이터베이스 연결 실패
  CACHE_SERVER_ERROR = 'CACHE_SERVER_ERROR',               // 캐시 서버 오류

  // 인증 및 권한 관련 에러
  AUTHENTICATION_FAILED = 'AUTHENTICATION_FAILED',         // 인증 실패
  UNAUTHORIZED_ACCESS = 'UNAUTHORIZED_ACCESS',             // 인증되지 않은 접근
  FORBIDDEN_ACCESS = 'FORBIDDEN_ACCESS',                   // 권한 없음
  TOKEN_EXPIRED = 'TOKEN_EXPIRED',                         // 토큰 만료

  // 데이터 검증 및 처리 관련 에러
  VALIDATION_FAILED = 'VALIDATION_FAILED',                 // 유효성 검사 실패
  DUPLICATE_DATA_ENTRY = 'DUPLICATE_DATA_ENTRY',           // 중복 데이터 입력
  RESOURCE_NOT_FOUND = 'RESOURCE_NOT_FOUND',               // 요청한 리소스를 찾을 수 없음
  USER_NOT_FOUND = 'USER_NOT_FOUND',                       // 사용자를 찾을 수 없음

  // 외부 서비스 및 리소스 관련 에러
  EXTERNAL_API_CALL_FAILED = 'EXTERNAL_API_CALL_FAILED',   // 외부 API 호출 실패
  API_RATE_LIMIT_EXCEEDED = 'API_RATE_LIMIT_EXCEEDED',     // API 호출 횟수 제한 초과
  RESOURCE_EXHAUSTED = 'RESOURCE_EXHAUSTED',               // 할당된 리소스 소진

  // 파일 및 스토리지 관련 에러
  FILE_UPLOAD_FAILED = 'FILE_UPLOAD_FAILED',               // 파일 업로드 실패
  FILE_NOT_FOUND = 'FILE_NOT_FOUND',                       // 파일을 찾을 수 없음
  STORAGE_CAPACITY_EXCEEDED = 'STORAGE_CAPACITY_EXCEEDED', // 스토리지 용량 초과

  // 네트워크 관련 에러
  NETWORK_CONNECTION_ERROR = 'NETWORK_CONNECTION_ERROR',   // 네트워크 연결 오류
  REQUEST_TIMEOUT = 'REQUEST_TIMEOUT',                     // 요청 시간 초과

  // 파일 잠금 및 동시성 관련 에러
  FILE_CURRENTLY_LOCKED = 'FILE_CURRENTLY_LOCKED',         // 파일이 현재 잠겨 있음 
  FILE_CURRENTLY_IN_USE = 'FILE_CURRENTLY_IN_USE',         // 파일이 현재 사용 중
  FILE_LOCK_FAILED = 'FILE_LOCK_FAILED',                   // 파일 잠금 해제 실패
  RESOURCE_LOCKED = 'RESOURCE_LOCKED',                     // 리소스가 잠겨 사용 불가

  // 기타 에러
  UNKNOWN_ERROR_OCCURRED = 'UNKNOWN_ERROR_OCCURRED',       // 알 수 없는 오류
}