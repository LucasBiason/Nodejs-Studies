import {connectionSource as dataSource} from './../../data-source'
import Video from "../entities/videos";

export class DeleteVideoService{
    async execute(id: string){
        const repository = dataSource.getRepository(Video);
        if(!await repository.findOne({ where:{ id: id }})){
            return new Error("Video does not exists!");
        }
        await repository.delete(id);
    }
}