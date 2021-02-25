import {Request, Response} from "express";
import { getCustomRepository, getRepository } from "typeorm";
import { User } from "../models/User";
import { UserRepository } from "../repositories/UserRepository";

class UserController{
    async create(request:Request,response:Response){
        const {name,email} = request.body;
        
        const usersRepository = getCustomRepository(UserRepository);

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
    return response.status(201).json(user);
        }
        
        async list(req:Request,res:Response){
const usersRepository = getRepository(User);
const users = await usersRepository.query("Select * from users");

return res.json(users);
        }
}

export{UserController};