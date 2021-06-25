import { Router } from "express";

import { CreateUserController } from './controllers/CreateUserController';
import { CreateTagController } from "./controllers/CreateTagController";
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateComplimentController } from './controllers/CreateComplimentController';

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();

import { ensureAdmin } from "./middlewares/validations/ensureAdmin"; 
import { ensureAuthenticated } from "./middlewares/authentication/ensureAuthenticated"; 

const routes = Router();

routes.post('/users', createUserController.handle);

routes.post('/tags', ensureAuthenticated, ensureAdmin, createTagController.handle);

routes.post('/login', authenticateUserController.handle);

routes.post('/compliments', ensureAuthenticated , createComplimentController.handle);

export default routes;