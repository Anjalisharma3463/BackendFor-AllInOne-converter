import converter from "./ContextConverter";
import { IFormatStrategy } from "./InterfaceStrategy";
import { JpegStrategy } from "../ConcreteStrategies/JpegStrategy";
import { PngStrategy } from "../ConcreteStrategies/PngStrategy";
import { WebpStrategy } from "../ConcreteStrategies/WebpStrategy";

class ConverterFactory {
  public static createConverter(targetFormat: string): converter {
   const strategies: { [key: string]: IFormatStrategy } = {
  jpeg: new JpegStrategy(),
  jpg: new JpegStrategy(),
  png: new PngStrategy(),
  webp: new WebpStrategy()
};

const strategy = strategies[targetFormat.toLowerCase()];
if (!strategy) throw new Error("Unsupported format");

return new converter(strategy);

  }
}

export default ConverterFactory;
