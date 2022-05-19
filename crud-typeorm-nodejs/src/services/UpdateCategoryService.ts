import {connectionSource as dataSource} from './../../data-source'
import Category from "../entities/categories";


type CategoryUpdateRequest = {
    id: string;
    name: string;
    description: string;
 }

export class UpdateCategoryService{
    async execute({id, name, description}:CategoryUpdateRequest): Promise<CategoryUpdateRequest|Error>{
        const repository = dataSource.getRepository(Category);
        const category = await repository.findOne({ where:{ id: id }});

        if(!category){
            return new Error("Category does not exists!");
        }
        category.name = name ? name : category.name;
        category.description = description ? description : category.description;
        repository.save(category);
        return category;
    }
}