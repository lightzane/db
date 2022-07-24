import { Injectable } from '@nestjs/common';
import { ObjectID } from './shared/util/object-id.util';

@Injectable()
export class AppService {

  readonly db = {};

  post(name: string, data: any): any {
    // Create new prop if not exist
    if (!this.db[name]) {
      this.db[name] = [];
    }

    // Add _id to data
    const ts = Date.now();
    const updated = {
      _id: ObjectID(ts),
      ...data,
      createdAt: new Date(ts)
    };

    // Push to prop
    this.db[name].push(updated);

    return updated;
  }
}
