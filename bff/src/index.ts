import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('BFF is running! 🚀');
});

// Iniciar el servidor
app.listen(PORT, () => {
  // console.log(`🚀 BFF running on http://localhost:${PORT}`);
});
