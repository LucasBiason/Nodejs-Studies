import {connectionSource as dataSource} from './../../data-source'
import Category from "../entities/categories";

export class DeleteCategoryService{
    async execute(id: string){
        const repository = dataSource.getRepository(Category);
        if(!await repository.findOne({ where:{ id: id }})){
            return new Error("Category does not exists!");
        }
        await repository.delete(id);
    }
}