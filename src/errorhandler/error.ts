import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { Response } from 'express';
import { HttpException, HttpStatus } from '@nestjs/common';

export const getStatusCode = (exception: unknown): number => {
  return exception instanceof HttpException
    ? exception.getStatus()
    : HttpStatus.INTERNAL_SERVER_ERROR;
};

export const getErrorMessage = (exception: unknown): string => {
  return String(exception);
};

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const code = getStatusCode(exception);
    const message = getErrorMessage(exception);

    response.status(code).json({
      Success: false,
      Status: code,
      Message: message,
      Data: null
    });
  }
}