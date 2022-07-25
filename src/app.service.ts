import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { IsObjectIdValid, ObjectID } from './shared/util/object-id.util';

@Injectable()
export class AppService {

  readonly db = {};

  post(collection: string, data: any): any {
    // Create new prop if not exist
    if (!this.db[collection]) {
      this.db[collection] = [];
    }

    // Add _id to data
    const ts = Date.now();
    const updated = {
      _id: ObjectID(ts),
      ...data,
      createdAt: new Date(ts),
      updatedAt: new Date(ts)
    };

    // Push to prop
    this.db[collection].push(updated);

    return updated;
  }

  update(collection: string, data: any): any {
    if (typeof data === 'object') {
      if (!data._id) {
        throw new NotFoundException('id not found');
      } else {
        IsObjectIdValid(data._id);
      }
      if (!this.db[collection]) {
        throw new NotFoundException('collection not found');
      }
      const existing = this.db[collection].find((i: any) => i._id === data._id);
      if (existing) {
        const ts = Date.now();
        // store original createdAt
        const createdTs = existing.createdAt;
        // modify updatedAt
        data.updatedAt = new Date(ts);
        // modify existing
        Object.assign(existing, data);
        // prevent updating createdAt and keep original
        existing.createdAt = createdTs;
        // return updated data
        return existing;
      }
    }
    throw new BadRequestException('Nothing was updated');
  }

  delete(collection: string, id: string): any {
    if (!this.db[collection]) {
      throw new NotFoundException('collection not found');
    }
    const idx = this.db[collection].findIndex((i: any) => i._id === id);
    if (idx >= 0) {
      const [deleted] = this.db[collection].splice(idx, 1);
      return deleted;
    }
    throw new BadRequestException('Nothing was deleted');
  }
}
