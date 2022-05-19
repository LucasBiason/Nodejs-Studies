import { Router} from "express";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { GetAllCategoriesController } from "./controllers/GetAllCategoriesController";
import { DeleteCategoryController } from "./controllers/DeleteCategoryController";
import { UpdateCategoryController } from "./controllers/UpdateCategoryController";

import { CreateVideoController } from "./controllers/CreateVideoController";
import { GetAllVideosController } from "./controllers/GetAllVideosController";
import { DeleteVideoController } from "./controllers/DeleteVideoController";
import { UpdateVideoController } from "./controllers/UpdateVideoController";


const routes = Router();

routes.get("/categories", new GetAllCategoriesController().handle);
routes.post("/categories", new CreateCategoryController().handle);
routes.put("/categories/:id", new UpdateCategoryController().handle);
routes.delete("/categories/:id", new DeleteCategoryController().handle);

routes.get("/videos", new GetAllVideosController().handle);
routes.post("/videos", new CreateVideoController().handle);
routes.put("/videos/:id", new UpdateVideoController().handle);
routes.delete("/videos/:id", new DeleteVideoController().handle);

export { routes };