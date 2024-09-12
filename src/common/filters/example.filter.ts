import { ExceptionFilter, Catch, ArgumentsHost, HttpException, Logger } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const errorResponse = exception.getResponse() as string | { message: string; error: string };

    let errorMessage: string;
    let errorType: string;

    if (typeof errorResponse === 'string') {
      errorMessage = errorResponse; 
      errorType = exception.name;    
    } else {
      errorMessage = errorResponse.message;
      errorType = errorResponse.error || exception.name;
    }

    const responseBody = {
      statusCode: status,
      error: errorType,
      message: errorMessage,
      path: request.url,
      method: request.method,
      timestamp: new Date().toISOString(),
    };

    this.logger.error(
      `[ERROR] ${status} ${request.method} ${request.url} - ${errorType}: ${errorMessage}`,
    );

    response
      .status(status)
      .json(responseBody);
  }
}