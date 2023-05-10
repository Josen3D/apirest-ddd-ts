// import Router from express
import { Router } from "express";
// import user controllers
import { insertUser, getUser } from "../controllers/user.controller";

//create the router
const router = Router();

/**
 * Ruta POST HTTP
 */
router.post("/user", insertUser);
/**
 * Ruta GET HTTP
 */
router.get("/user", getUser);

export default router;
