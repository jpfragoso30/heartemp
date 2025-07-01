/** @format */

import express, { json } from "express";
import heartRoutes from "./routes/heartRoutes.js";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

connectDB();
const app = express();

//Read the data
app.use(express.json());

//Routes
app.use("/heart", heartRoutes);

export default app;
