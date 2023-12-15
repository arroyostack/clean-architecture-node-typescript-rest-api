import { Request, Response } from "express";

const todos = [
    { id: 1, text: "buy milk", createdAt: new Date() },
    { id: 2, text: "buy milk", createdAt: new Date() },
    { id: 3, text: "buy milk", createdAt: new Date() },
    { id: 4, text: "buy milk", createdAt: new Date() },
    { id: 5, text: "buy milk", createdAt: new Date() },
];

export class TodosController {
    constructor() { }

    public getTodos = ( req: Request, res: Response ) => {
        return res.json( todos );
    };

    public geTodoById = ( req: Request, res: Response ) => {
        // plus sign simply converts a number string to number.
        const id = +req.params.id;
        const todo = todos.find( todo => todo.id === id );

        // Validates that the argument is a number and not a chracter for instance.
        if ( isNaN( id ) ) {
            // Bad request
            return res.status( 400 ).json( { error: 'Id argument is not a number.' } );
        }

        // Response.
        ( todo )
            ? res.json( todo )
            : res.status( 404 ).json( {
                // Not found.
                code: 404,
                message: `Todo with id ${id} does not exists on database.`
            } );
    };

    public createTodo = ( req: Request, res: Response ) => {
        const { text } = req.body;

        if ( !text ) {
            return res.status( 400 ).json( { error: 'Text property is required' } );
        } else {
            const newTodo = {
                id: todos.length + 1,
                text: text,
                createdAt: new Date()
            };

            todos.push( newTodo );

            res.json( newTodo );
        }



    };

}