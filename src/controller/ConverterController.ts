import { Request, Response} from 'express';
import ConverterFactory from '../services/ConverterFactory';


const ConverterController = async (req: Request, res: Response) => {
  const file = req.file;
  const { targetFormat } = req.body;

  if (!file || !targetFormat) {
    res.status(400).json({ error: 'File and target format are required' });
    return;
  }

  try {
  const converter = ConverterFactory.createConverter(file.mimetype);

  if (!converter) {
    res.status(400).json({ error: 'Unsupported file type for conversion' });
    return;
  }

  const converted = await converter.convert(file.buffer, targetFormat);
  res.setHeader('Content-Type', `image/${targetFormat}`);
  res.send(converted);
  } catch (err: any) {
    res.status(500).send(err.message);
  }
}

export default ConverterController;