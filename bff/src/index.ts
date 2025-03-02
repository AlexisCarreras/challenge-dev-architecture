import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import articleRoutes from './routes/articleRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('BFF is running! 🚀');
});

app.use('/api', articleRoutes);

app.listen(PORT, () => {
  // console.log(`🚀 BFF running on http://localhost:${PORT}`);
});
