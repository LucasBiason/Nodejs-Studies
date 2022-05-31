import {connectionSource as dataSource} from './../../data-source'
import Category from "../entities/categories";

type CategoryRequest = {
   name: string;
   description: string;
}

export class CreateCategoryService{

    async execute({name, description}:CategoryRequest): Promise<Category|Error> {
        const repository = dataSource.getRepository(Category);

        let findOne = await repository.createQueryBuilder("category").where(
            "category.name = :name", { name: name }
        ).getOne();

        if(findOne){
            return new Error("Category already exists");
        }

        const category = repository.create({
            name: name,
            description: description
        })

        await repository.save(category);
        return category;
    }

}