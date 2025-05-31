import ContextConverter from "./ContextConverter";
import { IFormatStrategy } from "./InterfaceStrategy";
import { JpegStrategy } from "../ConcreteStrategies/JpegStrategy";
import { PngStrategy } from "../ConcreteStrategies/PngStrategy";
import { WebpStrategy } from "../ConcreteStrategies/WebpStrategy";


//Now when we have to add new concretestrategy , we will add here not in main logic file where it is being executed.
class ConverterFactory {
  public static createConverter(targetFormat: string): ContextConverter {
   const strategies: { [key: string]: IFormatStrategy } = {
  jpeg: new JpegStrategy(),
  jpg: new JpegStrategy(),
  png: new PngStrategy(),
  webp: new WebpStrategy()
};

const strategy = strategies[targetFormat.toLowerCase()];
if (!strategy) throw new Error("Unsupported format");

return new ContextConverter(strategy);

  }
}

export default ConverterFactory;
