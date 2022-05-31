import {connectionSource as dataSource} from './../../data-source'
import Video from "../entities/videos";
import Category from '../entities/categories';


type VideoUpdateRequest = {
    id: string;
    name: string;
    description: string;
    duration: number;
    category_id: string;
 }

export class UpdateVideoService{
    async execute({id, name, description, duration, category_id}:VideoUpdateRequest): Promise<Video|Error>{
        const repository = dataSource.getRepository(Video);
        const repository_category = dataSource.getRepository(Category);
        const video = await repository.findOne({ where:{ id: id }});

        if(!video){
            return new Error("Video does not exists!");
        }

        if(category_id){
            const category = await repository_category.createQueryBuilder("category").where(
                "category.id = :category_id", {category_id:category_id}
            ).getOne();
            if(!category){
                return new Error("Category does not exists!");
            }
            video.category = category;
        }

        video.name = name ? name : video.name;
        video.description = description ? description : video.description;
        video.duration = duration ? duration : video.duration;
        repository.save(video);
        return video;
    }
}