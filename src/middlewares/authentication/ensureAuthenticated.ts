import { Request, Response, NextFunction } from 'express';

import { verify } from 'jsonwebtoken'; 

interface IPayLoad {
    sub: string;
};

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const AuthToken = request.headers.authorization;

    if(!AuthToken) {
        return response.status(401).end();
    };

    const [ , token ] = AuthToken.split(" ");

    try{
        const { sub } = verify(token, "fb11b32fbb7eb92cdbf435b538fdff66") as IPayLoad;

        request.user_id = sub;

        return next();
    } catch(error) {
        return response.status(401).end();
    };
};