import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import healthRouter from './routes/health';
import launchRoutes from './routes/launchRoutes';
import { errorHandler } from './middleware/errorHandler';

dotenv.config();

const app = express();

// Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
}));
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/health', healthRouter);
app.use('/api/launches', launchRoutes);

// Error handling
app.use(errorHandler);

export default app;