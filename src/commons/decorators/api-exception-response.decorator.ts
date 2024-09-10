import { ApiResponse, ApiResponseOptions } from '@nestjs/swagger';
import { applyDecorators, HttpStatus } from '@nestjs/common';
import { ERROR } from 'src/constant/error';


export const ApiExceptionResponse = (error: ERROR[], options?: ApiResponseOptions) => {
  const status = (!options?.status) ? HttpStatus.OK : options.status;

  return applyDecorators(
    ApiResponse({
      ...options,
      status,
      schema: {
        allOf: [
          {
            properties: {
              status_code: {
                type: 'number',
                default: status,
              },
              status: {
                type: 'enum',
                enum: error,
              },
              timestamp: {
                type: 'string',
                default: new Date(),
              },
              path: {
                type: 'string',
              },
            },
          },
        ],
      },
    }),
  );
};
