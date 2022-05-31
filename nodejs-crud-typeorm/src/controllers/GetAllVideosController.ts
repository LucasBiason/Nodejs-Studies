import { Request, Response } from "express";
import { GetAllVideosService } from "../services/GetAllVideosService";

export class GetAllVideosController{
    async handle(request: Request, response: Response){
        const service = new GetAllVideosService();
        const categories = await service.execute();
        return response.json(categories)
    }
}