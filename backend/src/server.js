/** @format */

import express, { json } from "express";
import heartRoutes from "./routes/heartRoutes.js";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import { corsConfig } from "./config/cors.js";

dotenv.config();

connectDB();
const app = express();

//Prevent CORS errors
app.use(cors(corsConfig));

//Read the data
app.use(express.json());

//Routes
app.use("/api/auth", authRoutes);
app.use("/api/heart", heartRoutes);

export default app;
