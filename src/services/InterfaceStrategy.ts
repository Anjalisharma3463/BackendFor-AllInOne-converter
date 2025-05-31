import sharp from 'sharp';

export interface IFormatStrategy {
  convert(instance: sharp.Sharp): Promise<Buffer>;
}
