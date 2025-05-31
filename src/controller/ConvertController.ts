import { Request, Response} from 'express';
import ConverterFactory from '../services/ConverterFactory';


const ConvertController = async (req: Request, res: Response) => {
  const file = req.file;
  const { targetFormat } = req.body;

  if (!file || !targetFormat) {
    res.status(400).json({ error: 'File and target format are required' });
    return;
  }

  try {
const converter = ConverterFactory.createConverter(targetFormat);
  const convertedBuffer = await converter.convert(file.buffer);
  res.setHeader('Content-Type', `image/${targetFormat}`);
  res.send(convertedBuffer);
  } catch (err: any) {
    res.status(500).send(err.message);
  }
}

export default ConvertController;