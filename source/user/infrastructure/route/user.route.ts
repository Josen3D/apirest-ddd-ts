// import Router from express
import { Router } from "express";
import { MockRepository } from "../repository/mock.repository";
import { UserUseCase } from "../../application/userUseCase";
import { UserController } from "../controller/user.controller";
import { MongoRepository } from "../repository/mongo.repository";

//create the router
const router = Router();

/**
 * Iniciar Repository
 */
const userRepository = new MongoRepository();

/**
 * Iniciar casos de uso
 */
const userUseCase = new UserUseCase(userRepository);

/**
 * Iniciar User Controller
 */
const userCtrl = new UserController(userUseCase);

/**
 *
 */
router.post("/user", userCtrl.insertCtrl);
router.get("/user", userCtrl.getCtrl);

export default router;
