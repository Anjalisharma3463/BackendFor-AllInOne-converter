import sharp from 'sharp';

class SharpSingleton {
  private static instance: sharp.Sharp;

  public static getInstance(buffer: Buffer): sharp.Sharp {
    SharpSingleton.instance = sharp(buffer);
    return SharpSingleton.instance;
  }
}

export default SharpSingleton;

  