/** @format */

import mongoose, { Schema } from "mongoose";

const measureSchema = new Schema(
  {
    latitud: {
      type: Number,
      required: true,
    },
    longitud: {
      type: Number,
      required: true,
    },
    general: {
      type: Number,
      required: true,
    },
    envase: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Measure = mongoose.model("Measure", measureSchema);
export default Measure;
