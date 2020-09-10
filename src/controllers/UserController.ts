import { Request, Response} from 'express';
import EmailService from '../services/EmailService';

const users = [
    {name: "teste", email: "teste@teste.com"},
    {name: "teste2", email: "teste2@teste.com"},
    {name: "teste3", email: "teste3@teste.com"}
]

export default {
    async index(req: Request, res: Response){
        return res.json(users);
    },

    async create(req: Request, res: Response){
        const emailService = new EmailService();
        emailService.sendMail(
            { name: "Teste", email: "teste@teste.com" },
            { subject: "Isso é um teste", body: "Aqui também é um teste" }
        );

        return res.send();
    }
}