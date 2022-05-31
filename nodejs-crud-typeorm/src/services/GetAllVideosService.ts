import {connectionSource as dataSource} from './../../data-source'
import Video from "../entities/videos";


export class GetAllVideosService{
    async execute(){
        const repository = dataSource.getRepository(Video);
        const videos = await repository.find();
        return videos;
    }
}