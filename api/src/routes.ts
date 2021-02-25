import {Router} from "express";
import { SurveysController } from "./controllers/SurveysController";

import {UserController} from "./controllers/UserController";

const router = Router();

const userController = new UserController();
const surveysController = new SurveysController();


//Rotas Usuários
router.post("/users",userController.create);
router.get("/users",userController.list);


//Rotas Pesquisas
router.post("/surveys",surveysController.create);
router.get("/surveys",surveysController.list);
export {router};