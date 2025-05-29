// src/app.ts
import express from 'express';
import convertRoute from './routes/ConvertRoute';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', convertRoute);

app.listen(4000, () => console.log('Server running on http://localhost:4000'));

// api is :- http://localhost:5000/api/convert