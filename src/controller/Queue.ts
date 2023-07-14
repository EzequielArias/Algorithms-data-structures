import { Request, Response } from "express";
import { Queue } from "../classes";
import { Recipe, TypedRequestBody } from "../interfaces";

const controller = new Queue();

const enqueue = (req: TypedRequestBody<Recipe>, res: Response) => {
    const { name, score } = req.body;

    const data = {
        name,
        score
    }

    try {
        controller.enqueue(data)
        res.send('enqueue').status(201)
    } catch (error) {
        res.send(error).status(400)
    }
}

const dequeue = (res: Response) => {
    try {
        const recipe = controller.dequeue()

        res.send(recipe).status(200)
    } catch (error) {
        res.send(error).status(400)
    }
}

const peek = (res: Response) => {
    try {
        const recipe = controller.dequeue()

        res.send(recipe).status(200)
    } catch (error) {
        res.send(error).status(400)
    }
}

const rear = (res: Response) => {
    try {
        const recipe = controller.dequeue()

        res.send(recipe).status(200)
    } catch (error) {
        res.send(error).status(400)
    }
}

export { enqueue, dequeue, peek, rear }