import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter<T> implements ExceptionFilter {

  catch(exception: HttpException, host: ArgumentsHost) {
    const request = host.switchToHttp().getRequest() as Request;
    const response = host.switchToHttp().getResponse() as Response;
    const status = exception.getStatus();

    const id = exception.message.includes('id') ? request.params.id || request.body?._id : undefined;
    const collection = exception.message.includes('collection') ? request.params.collection : undefined;

    response
      .status(status)
      .json({
        url: request.url,
        timestamp: new Date().toISOString(),
        ...exception.getResponse() as object,
        id,
        collection
      });
  }

}
