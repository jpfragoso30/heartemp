/** @format */

import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.DATABASE_URL);
    const url = `${connection.connection.host}:${connection.connection.port}`;
    console.log(`MongoDB Conectado Correctamente en ${url}`);
  } catch (error) {
    console.log("Error al conectar la base de datos");
    process.exit(1);
  }
};
