import { Router } from "express";

import { CreateUserController } from './controllers/CreateUserController';
import { CreateTagController } from "./controllers/CreateTagController";

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();

import { ensureAdmin } from "./middlewares/validations/ensureAdmin"; 

const routes = Router();

routes.post('/users', createUserController.handle);

routes.post('/tags', ensureAdmin, createTagController.handle);

export default routes;