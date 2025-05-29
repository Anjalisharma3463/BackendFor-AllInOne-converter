import converter from "./Converter";

class ConverterFactory {
 public static createConverter(mimetype : string){
    try {
          if(mimetype.startsWith('image/')) {
            return new converter();
        }
    } catch (error) {
        throw new Error('Unsupported mimetype');
    }
       
       
 }
}

export default ConverterFactory;