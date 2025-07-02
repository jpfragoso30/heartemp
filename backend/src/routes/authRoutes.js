/** @format */

import { Router } from "express";
import { body } from "express-validator";
import { handleInputErrors } from "../middleware/validation.js";
import { AuthController } from "../controllers/AuthController.js";

const router = Router();

router.post(
  "/create-account",
  body("name").notEmpty().withMessage("El nombre no puede ir vacío"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("El password es muy corto, mínimo 8 caracteres"),
  body("password_confirmation").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Los Password no son iguales");
    }
    return true;
  }),
  body("email").isEmail().withMessage("Email no es válido"),
  handleInputErrors,
  AuthController.createAccount
);

router.post(
  "/login",
  body("email").isEmail().withMessage("Email no es válido"),
  body("password").notEmpty().withMessage("El password no puede ir vacío"),
  handleInputErrors,
  AuthController.login
);

export default router;
