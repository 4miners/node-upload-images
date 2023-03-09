import {
  GenericImageUploadService,
  IGenericImageUploadService,
  TGenericImageUploadResponse
} from './services/genericImageUploadService';

import { NewFastpicORG } from './services/newFastpicORG';

export type ImageUploadServiceName =
  | 'new.fastpic.org';

const services = {
  'new.fastpic.org': NewFastpicORG
};

export class ImageUploadService implements IGenericImageUploadService {
  private uploader: GenericImageUploadService;

  constructor(serviceName: ImageUploadServiceName) {
    const ServiceClass = services[serviceName];
    if (!ServiceClass) {
      throw new Error(`Invalid service name: ${serviceName}`);
    }
    this.uploader = new ServiceClass();
  }

  async uploadFromUrl(
    url: string,
    randomFilename: boolean
  ): Promise<TGenericImageUploadResponse> {
    return this.uploader.uploadFromUrl(url, randomFilename);
  }
}
