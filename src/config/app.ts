import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';

import '../database';

import routes from '../routes';
import middlewareError from '../middlewares/error/Error';

const app = express();

app.use(express.json());

app.use(routes);

app.use(middlewareError);

export default app;
