import cors from 'cors';
import dotenv from 'dotenv';
import express, { Request, Response } from 'express';

import articleRoutes from './routes/articleRoutes';

dotenv.config();

if (!process.env.API_URL) {
  throw new Error('API_URL is not defined in .env');
}

if (!process.env.PORT) {
  throw new Error('PORT is not defined in .env');
}

const app = express();

const PORT = process.env.PORT;

app.use(cors({ origin: process.env.FRONTEND_URL }));
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('BFF is running! 🚀');
});

app.use('/api', articleRoutes);

app.listen(PORT, () => {});
