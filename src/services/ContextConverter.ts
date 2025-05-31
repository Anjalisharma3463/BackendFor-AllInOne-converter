
// import SharpSingleton from './SharpSingleton';

// class converter {
// async convert(buffer: Buffer, targetFormat: string):  Promise<Buffer> {
// const sharpInstance = SharpSingleton.getInstance(buffer);
//     switch (targetFormat) {
//       case 'jpeg':
//         return  sharpInstance.jpeg().toBuffer();
//       case 'png':
//         return sharpInstance.png().toBuffer();
//       case 'webp':
//         return sharpInstance.webp().toBuffer();
//       default:
//         throw new Error('Unsupported format');
//     }
//   }
// }
// export default converter;

 import SharpSingleton from './SharpSingleton';
import { IFormatStrategy } from './InterfaceStrategy';

class converter {
  private strategy: IFormatStrategy;

  constructor(strategy: IFormatStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: IFormatStrategy) {
    this.strategy = strategy;
  }

  async convert(buffer: Buffer): Promise<Buffer> {
    if (!this.strategy) {
      throw new Error('No conversion strategy provided');
    }

    const sharpSingleton = new SharpSingleton(buffer);
    const sharpInstance = sharpSingleton.getInstance();
    return this.strategy.convert(sharpInstance);
  }
}
export default converter;
