
import SharpSingleton from './SharpSingleton';

class converter {
async convert(buffer: Buffer, targetFormat: string):  Promise<Buffer> {
const sharpInstance = SharpSingleton.getInstance(buffer);
    switch (targetFormat) {
      case 'jpeg':
        return  sharpInstance.jpeg().toBuffer();
      case 'png':
        return sharpInstance.png().toBuffer();
      case 'webp':
        return sharpInstance.webp().toBuffer();
      default:
        throw new Error('Unsupported format');
    }
  }
}
export default converter;