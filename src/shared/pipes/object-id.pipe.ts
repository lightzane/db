import { Injectable, PipeTransform } from '@nestjs/common';
import { IsObjectIdValid } from '../util/object-id.util';

@Injectable()
export class ObjectIdPipe implements PipeTransform {

  transform(value: string) {
    return IsObjectIdValid(value);
  }

}
