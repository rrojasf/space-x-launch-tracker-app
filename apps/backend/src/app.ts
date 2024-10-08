import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import healthRouter from "./routes/health";
import launchRoutes from "./routes/launchRoutes";
import twitterRoutes from "./routes/twitterRoutes";
import { errorHandler } from "./middleware/errorHandler";

dotenv.config();

const app = express();

// Middleware
app.use(helmet());
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
  }),
);
app.use(morgan("dev"));
app.use(express.json());

// Disable CORS while development stage
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
  );
  next();
});

// Routes
app.use("/health", healthRouter);
app.use("/api/launches", launchRoutes);
app.use("/api/tweets", twitterRoutes);

// Error handling
app.use(errorHandler);

export default app;
