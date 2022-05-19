import {connectionSource as dataSource} from './../../data-source'
import Category from "../entities/categories";


export class GetAllCategoriesService{
    async execute(){
        const repository = dataSource.getRepository(Category);
        const categories = await repository.find();
        return categories;
    }
}