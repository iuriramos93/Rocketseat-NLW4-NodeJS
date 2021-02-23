import {Request, Response} from "express";
import { getRepository } from "typeorm";
import { User } from "../models/User";

class UserController{
    async create(request:Request,response:Response){
        const {name,email} = request.body;
        
        const usersRepository = getRepository(User);

        const userAlreadyExists = await usersRepository.findOne({
            email
        });
        if(userAlreadyExists){
            return response.status(400).json({
                erro:"Usuário já existe!"
            });
        }

        const user = usersRepository.create(
            {
                name:name,
                email:email
            }
            );
    await usersRepository.save(user);
    return response.json(user);
        }
        async list(req:Request,res:Response){
const usersRepository = getRepository(User);
const users = await usersRepository.query("Select * from users");

return res.json(users);
        }
}

export{UserController};