import sharp from 'sharp';
import { IFormatStrategy } from '../services/InterfaceStrategy';

 
export class PngStrategy implements IFormatStrategy {
  async convert(instance: sharp.Sharp): Promise<Buffer> {
    return instance.png().toBuffer();
  }
}
