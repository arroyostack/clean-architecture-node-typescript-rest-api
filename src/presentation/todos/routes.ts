import { Router } from "express";
import { TodosController } from "./controllers";

export class TodoRoutes {

    static get routes(): Router {
        const router = Router();
        const todoController = new TodosController();

        router.get( '/', todoController.getTodos );
        router.get( '/:id', todoController.geTodoById );
        router.post( '/', todoController.createTodo );

        return router;
    }
}