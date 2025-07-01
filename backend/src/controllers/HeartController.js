/** @format */

import Measure from "../models/Measures.js";

export class HeartController {
  static saveData = async (req, res) => {
    try {
      //Create data
      const data = new Measure(req.body);
      await data.save();
      res.send("Datos obtenidos correctamente");
    } catch (error) {
      res.status(500).json({ error: "Hubo un error" });
    }
  };

  static getLastOne = async (req, res) => {
    try {
      const measure = await Measure.findOne().sort({ _id: -1 }).limit(1);
      if (!measure)
        return res.status(404).json({ message: "No hay datos aún" });
      res.status(200).json(measure);
    } catch (error) {
      res.status(500).json({ message: "Error del servidor" });
    }
  };
}
