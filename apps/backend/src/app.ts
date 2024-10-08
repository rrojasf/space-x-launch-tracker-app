import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { errorHandler } from "./middleware/errorHandler";
import healthRouter from "./routes/health";
import launchRoutes from "./routes/launchRoutes";
import twitterRoutes from "./routes/twitterRoutes";

dotenv.config();

const allowedOrigins = [process.env.FRONTEND_URL || "http://localhost:3000"];
const app = express();

// Middleware
app.use(helmet());
app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        var msg =
          "The CORS policy for this site does not allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  }),
);
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/health", healthRouter);
app.use("/api/launches", launchRoutes);
app.use("/api/tweets", twitterRoutes);

// Error handling
app.use(errorHandler);

export default app;
