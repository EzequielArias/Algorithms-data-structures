import { Recipe } from "../interfaces"

export class Queue {
    private queue : Array<Recipe> = []

    public enqueue(recipe : Recipe) : void | Error {
        const validate = this.isFull(this.queue),
        empty = this.isNull(this.queue)

        if(empty instanceof Error) throw empty

        if(validate){
            this.queue[this.queue.length] = recipe
        }else{
            return validate
        }
    }

    public dequeue() : Error | Recipe {
        const empty = this.isNull(this.queue)

        if(empty instanceof Error) throw empty
        
        let aux = this.queue[0]
    
        for (let i = 0; i < this.queue.length; i++) {
            if(!this.queue[i + 1]) continue;

            this.queue[i] = this.queue[i + 1]
        }

        return aux
    }

    public peek() : Error | Recipe {
        const empty = this.isNull(this.queue)

        if(empty instanceof Error) throw empty
        
        return this.queue[0]
    }

    public rear() : Error | Recipe {
        const empty = this.isNull(this.queue)

        if(empty instanceof Error) throw empty

        return this.queue[this.queue.length - 1]
    }

    private isFull(arr : Array<any>) : Error | Boolean {
        if(arr.length > 20) throw new Error('Stackoverflow')

        return true
    }

    private isNull(arr : Array<any>) : Error | Boolean {
        if(!arr.length) throw new Error('Queue vacia')

        return true
    }
}