import { Router } from "express";

import { CreateUserController } from './controllers/CreateUserController';
import { CreateTagController } from "./controllers/CreateTagController";
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateComplimentController } from './controllers/CreateComplimentController';
import { ListUserSenderComplimentController } from './controllers/ListUserSendComplimentController';
import { ListUserReceiverComplimentController } from './controllers/ListUserReceiverComplimentController';

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserSenderComplimentController = new ListUserSenderComplimentController();
const listUserReceiverComplimentController = new ListUserReceiverComplimentController();

import { ensureAdmin } from "./middlewares/validations/ensureAdmin"; 
import { ensureAuthenticated } from "./middlewares/authentication/ensureAuthenticated"; 

const routes = Router();

routes.post('/users', createUserController.handle);
routes.get('/users/compliments/send', ensureAuthenticated, listUserSenderComplimentController.handle);
routes.get('/users/compliments/receive', ensureAuthenticated, listUserReceiverComplimentController.handle);

routes.post('/tags', ensureAuthenticated, ensureAdmin, createTagController.handle);

routes.post('/login', authenticateUserController.handle);

routes.post('/compliments', ensureAuthenticated , createComplimentController.handle);

export default routes;