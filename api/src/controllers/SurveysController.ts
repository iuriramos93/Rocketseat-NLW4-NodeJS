import{Request,Response} from "express";
import { getCustomRepository } from "typeorm";
import { SurveysRepository } from "../repositories/SurveysRepository";


class SurveysController{

    async create(req:Request,res:Response){
        const{ title,description } = req.body;
        
        const surveysRepo = getCustomRepository(SurveysRepository);

        const survey = surveysRepo.create({
            title,
            description
        });
        await surveysRepo.save(survey);
        return res.status(201).json(survey);
    }
    async list(req:Request,res:Response){
                
        const surveysRepo = getCustomRepository(SurveysRepository);
        
        const get = await surveysRepo.find();
return res.json(get);
    }
   
}
export{SurveysController}