import sharp from 'sharp';
import { IFormatStrategy } from '../services/InterfaceStrategy';

export class JpegStrategy implements IFormatStrategy {
  async convert(instance: sharp.Sharp): Promise<Buffer> {
    return instance.jpeg().toBuffer();
  }
}
