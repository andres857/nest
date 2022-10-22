import { Injectable } from '@nestjs/common';
import { Site } from '../../entities/sites.entity';

@Injectable()
export class SitesService {
  private countId = 0;
  private sites: Site[] = [
    {
      id: 0,
      name: 'sede norte',
      city: 'Bogota',
      address: 'cll 93d #13-13',
      phone: 3007566519,
    },
  ];
  create(data) {
    this.countId = this.countId + 1;
    const newsite = {
      id: this.countId,
      ...data,
    };
    this.sites.push(newsite);
    return this.sites[this.countId];
  }
  findAll() {
    return this.sites;
  }
  findOne(id: number) {
    const found = this.sites.find((item) => id === item.id);
    if (!found) {
      throw new Error('site not found');
    }
    return found;
  }
  update(id, data) {
    const indexfound = this.sites.findIndex((item) => item.id === id);
    if (indexfound === -1) {
      throw new Error('site not found');
    }
    const sitefound = this.sites[indexfound];
    this.sites[indexfound] = {
      ...sitefound,
      ...data,
    };
    return this.sites[indexfound];
  }
  delete(id) {
    const indexfound = this.sites.findIndex((item) => item.id === id);
    if (indexfound === -1) {
      throw new Error('site not found');
    }
    const sitedeleted = this.sites[indexfound];
    this.sites.splice(indexfound, 1);
    return sitedeleted;
  }
}
