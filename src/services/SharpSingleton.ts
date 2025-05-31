import sharp from 'sharp';

// class SharpSingleton {
//   private static instance: sharp.Sharp;

//   public static getInstance(buffer: Buffer): sharp.Sharp {
//     SharpSingleton.instance = sharp(buffer);
//     // this instance will get overridden with each call or on a new sharp ojbect eachtime, but it will always be the latest instance created with the provided buffer
//    // so here we are replacing it again n again. so it is not a singletorn instance.
//     return SharpSingleton.instance;
//   }
// }

// export default SharpSingleton;

   
 
class SharpSingleton {
  private static instance: sharp.Sharp;

  constructor(buffer: Buffer) {
    if (!SharpSingleton.instance) {
      
      SharpSingleton.instance = sharp(buffer);
    }
  }

  getInstance() {
    return SharpSingleton.instance;
  }
}
 
export default SharpSingleton;