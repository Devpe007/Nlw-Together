import { Router } from "express";

const routes = Router();

routes.get('/test', (req, res) => {
    return res.send('Olá NLW');
});

routes.post('/test-post', (req, res) => {
    return res.send('Olá NLW método POST');
});

export default routes;