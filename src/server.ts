import express, { Request, Response } from 'express';
import cors from 'cors'
import { config } from './constants'
import { getAsteroids } from './controllers/asteroidController';

const app = express();

app.use(express.json());
app.use(cors())

// Web Service
app.get('/api/asteroids', getAsteroids);

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});