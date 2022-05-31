import {connectionSource as dataSource} from './../../data-source'
import Video from "../entities/videos";
import Category from '../entities/categories';

type VideoRequest = {
   name: string;
   description: string;
   duration: number;
   category_id: string;
}

export class CreateVideoService{

    async execute({name, description, duration, category_id}:VideoRequest): Promise<Video|Error> {
        const repository = dataSource.getRepository(Video);
        const repository_category = dataSource.getRepository(Category);

        let findOne = await repository.createQueryBuilder("video").where(
            "video.name = :name", { name: name }
        ).getOne();

        if(findOne){
            return new Error("Video already exists");
        }

        if(!category_id)
            return new Error("Category required!");

        const category = await repository_category.createQueryBuilder("category").where(
            "category.id = :category_id", {category_id:category_id}
        ).getOne();
        if(!category){
            return new Error("Category does not exists!");
        }

        const video = repository.create({
            name: name,
            description: description,
            duration: duration,
            category: category
        })

        await repository.save(video);
        return video;
    }

}