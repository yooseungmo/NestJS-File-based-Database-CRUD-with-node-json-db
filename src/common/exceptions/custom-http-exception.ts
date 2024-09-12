import { HttpException, HttpStatus } from '@nestjs/common';
import { ERROR } from '../constants/error.enum';

export class CustomHttpException extends HttpException {
  constructor(error: ERROR, status: HttpStatus) {
    super(error, status);
  }
}

// 400 Bad Request
export class BadRequestException extends CustomHttpException {
  constructor(error: ERROR) {
    super(error, HttpStatus.BAD_REQUEST);
  }
}

// 401 Unauthorized
export class UnauthorizedException extends CustomHttpException {
  constructor(error: ERROR) {
    super(error, HttpStatus.UNAUTHORIZED);
  }
}

// 403 Forbidden
export class ForbiddenException extends CustomHttpException {
  constructor(error: ERROR) {
    super(error, HttpStatus.FORBIDDEN);
  }
}

// 404 Not Found
export class NotFoundException extends CustomHttpException {
  constructor(error: ERROR) {
    super(error, HttpStatus.NOT_FOUND);
  }
}

// 404 User Not Found
export class UserNotFoundException extends CustomHttpException {
  constructor(error: ERROR) {
    super(error, HttpStatus.NOT_FOUND);
  }
}

// 409 Conflict
export class ConflictException extends CustomHttpException {
  constructor(error: ERROR) {
    super(error, HttpStatus.CONFLICT);
  }
}

// 422 Unprocessable Entity
export class UnprocessableEntityException extends CustomHttpException {
  constructor(error: ERROR) {
    super(error, HttpStatus.UNPROCESSABLE_ENTITY);
  }
}

// 429 Too Many Requests
export class TooManyRequestsException extends CustomHttpException {
  constructor(error: ERROR) {
    super(error, HttpStatus.TOO_MANY_REQUESTS);
  }
}

// 500 Internal Server Error
export class InternalServerErrorException extends CustomHttpException {
  constructor(error: ERROR) {
    super(error, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}

// 503 Service Unavailable
export class ServiceUnavailableException extends CustomHttpException {
  constructor(error: ERROR) {
    super(error, HttpStatus.SERVICE_UNAVAILABLE);
  }
}