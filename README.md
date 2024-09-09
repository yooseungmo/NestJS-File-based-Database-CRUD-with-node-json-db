
# 파일 기반 데이터베이스 API 프로젝트

## 프로젝트 설명 (Description)

이 프로젝트는 **NestJS**, **TypeScript**, **Swagger**, **Axios**, 그리고 **node-json-db**를 활용하여 파일 기반 데이터베이스를 관리하는 RESTful API입니다. 파일에 데이터를 저장하고 조회하는 기능을 제공합니다. 또한, **Swagger**를 통해 API 문서를 자동 생성하고, **Axios**를 사용하여 외부 API와 통신하는 기능을 구현했습니다.

## 주요 기능 (Features)

- 파일 기반 데이터 저장 및 조회 (`node-json-db`)
- **NestJS**를 사용한 서버 프레임워크
- **Swagger**를 통한 API 문서화
- **Axios**를 통한 외부 API 통신
- **Jest**로 유닛 테스트

## 제약 사항 (Constraints)

- **TypeScript**로 작성
- **node-json-db** 사용
- **NestJS** 서버 프레임워크 사용
- **Axios** 통신 라이브러리 사용
- **Jest** 테스트 라이브러리 사용

## 설치 방법 (Installation)

\`\`\`bash
# 패키지 설치
$ yarn install
\`\`\`

## 프로젝트 실행 (Running the Project)

\`\`\`bash
# 개발 모드
$ yarn run start

# 자동 감지 모드 (watch mode)
$ yarn run start:dev

# 프로덕션 모드
$ yarn run start:prod
\`\`\`

## API 문서 확인 (API Documentation)

\`\`\`bash
# 프로젝트 실행 후, 브라우저에서 Swagger UI를 확인하세요.
http://localhost:3000/api
\`\`\`

## 테스트 실행 (Running Tests)

\`\`\`bash
# 유닛 테스트
$ yarn run test

# e2e 테스트
$ yarn run test:e2e

# 테스트 커버리지
$ yarn run test:cov
\`\`\`

## 파일 구조 (Project Structure)

\`\`\`
📂 프로젝트 루트
 ┣ 📂 src              # 소스 코드
 ┃ ┣ 📂 modules        # 각 모듈별 코드
 ┃ ┗ 📜 main.ts        # 앱 엔트리 포인트
 ┣ 📂 test             # 테스트 코드
 ┣ 📜 README.md        # 이 파일!
 ┣ 📜 package.json     # 프로젝트 설정 파일
 ┗ 📜 tsconfig.json    # TypeScript 설정 파일
\`\`\`

## 참고 자료 (Resources)

NestJS와 관련된 더 많은 정보는 아래 링크들을 참고하세요:

- [NestJS 공식 문서](https://docs.nestjs.com)
- [NestJS Swagger](https://docs.nestjs.com/openapi/introduction)
- [Axios 공식 문서](https://axios-http.com/docs/intro)

## 라이센스 (License)

이 프로젝트는 [MIT 라이센스](https://opensource.org/licenses/MIT)를 따릅니다.
