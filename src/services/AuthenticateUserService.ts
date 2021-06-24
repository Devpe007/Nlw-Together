import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

import { compare } from 'bcryptjs';

interface IAuthenticateRequest {
    email: string;
    password: string;
};

class AthenticateUserService {
    async execute({ email, password }: IAuthenticateRequest) {
        const usersRepositories = getCustomRepository(UsersRepositories);

        const user = await usersRepositories.findOne({
            email,
        });

        if(!user) {
            throw new Error('Email/Password incorrect ');
        };

        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch) {
            throw new Error('Email/Password incorrect ');
        };
    };
};

export { AthenticateUserService };