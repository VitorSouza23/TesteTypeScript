import { Request, Response} from 'express';

const users = [
    {name: "teste", email: "teste@teste.com"},
    {name: "teste2", email: "teste2@teste.com"},
    {name: "teste3", email: "teste3@teste.com"}
]

export default {
    async index(req: Request, res: Response){
        return res.json(users);
    }
}