import {Request, Response} from 'express';
import EmailService from '../services/EmailService';

const users = [
    { name: 'Caio', email: 'caio@teste.com.br'},
];

export default {

    async index(req: Request, res: Response){
        return res.json(users);
    },

    async create(req: Request, res: Response){
        const emailService = new EmailService();
        emailService.sendMail({
            to:{ name: 'Lucas', email: 'lucas@teste.com.br'},
            message:{ subject: 'Bem Vindo', body: "Seja Bem vindo"}
        });
        return res.json(users);
    }

}