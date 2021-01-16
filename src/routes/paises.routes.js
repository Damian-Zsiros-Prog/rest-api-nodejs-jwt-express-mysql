import { Router } from "express";
import {
  createPais,
  getAllPaises,
  getPaisById,
  updatePais,
  deletePais,
} from "../controllers/paises.controller";
import { login, signup } from "../controllers/auth.controller";
import verifyToken from "../middlewares/verifyToken.middleware";

const router = Router();

router.get("/", (req, res) => res.redirect("/api/paises"));

router.post("/api/login", login);
router.post("/api/signup", signup);

router
  .route("/api/paises")
  .get(verifyToken, getAllPaises)
  .post(verifyToken, createPais);

router
  .route("/api/pais/:id")
  .get(verifyToken, getPaisById)
  .put(verifyToken, updatePais)
  .delete(verifyToken, deletePais);

export default router;
