import sharp from 'sharp';
import { IFormatStrategy } from '../services/InterfaceStrategy';

export class WebpStrategy implements IFormatStrategy {
  async convert(instance: sharp.Sharp): Promise<Buffer> {
    return instance.webp().toBuffer();
  }
}