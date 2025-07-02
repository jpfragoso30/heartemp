/** @format */

import User from "../models/User.js";
import { hashPassword, checkPassword } from "../utils/auth.js";
import { generateJWT } from "../utils/jwt.js";

export class AuthController {
  static createAccount = async (req, res) => {
    try {
      const { email } = req.body;
      const userExist = await User.findOne({ email });
      if (userExist) {
        const error = new Error("El Usuario ya está registrado");
        return res.status(409).json({ error: error.message });
      }

      // Create user
      const user = new User(req.body);

      // Hash Password

      user.password = await hashPassword(String(req.body.password));

      await user.save();

      res.send("Cuenta creada");
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  static login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        const error = new Error("Usuario no encontrado");
        return res.status(404).json({ error: error.message });
      }

      //Check password
      const isPasswordCorrect = await checkPassword(password, user.password);

      if (!isPasswordCorrect) {
        const error = new Error("Password incorrecto");
        return res.status(401).json({ error: error.message });
      }

      const token = generateJWT({ id: user.id });
      res.send(token);
    } catch (error) {
      res.status(500).json({ error: "Hubo un error" });
    }
  };
}
