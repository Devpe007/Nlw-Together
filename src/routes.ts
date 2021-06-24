import { Router } from "express";

import { CreateUserController } from './controllers/CreateUserController';
import { CreateTagController } from "./controllers/CreateTagController";
import { AuthenticateUserController } from './controllers/AuthenticateUserController';

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();

import { ensureAdmin } from "./middlewares/validations/ensureAdmin"; 

const routes = Router();

routes.post('/users', createUserController.handle);

routes.post('/tags', ensureAdmin, createTagController.handle);

routes.post('/login', authenticateUserController.handle);

export default routes;