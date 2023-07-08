import { DataType } from "../interfaces";

export class LinkedList {

        private head : Nodo = {} as Nodo
        private _length: number = 0
        private tail : Nodo = {} as Nodo

    /*constructor(
        private head:  null | Nodo,
        private _length: number,
        private tail: Nodo | null
        )
        {
            this.head = null;
            this._length = 0;
            this.tail = null
        }*/

    public insert(data: DataType) : void {
        const nodo = new Nodo(data)
        let current : any = this.head;

        if (!this.head)
        {
            this.head = nodo;
            this._length++
            return 
        }

        while (!current['next']) {
            current = current['next']
        }

        current['next'] = nodo;
        this._length++
    }

    public deletion(query : string) : void {
        let current : any = this.head;

        if(current){
            if(current['data'].car_name === query || 
               current['data'].car_brand === query || 
               current['data'].car_category === query)
            {
                this.head = {} as Nodo
            }
        }

        while (!current['next']){
            current = current['next']

            if(current['data'].car_name === query || 
               current['data'].car_brand === query || 
               current['data'].car_category === query)
            {
                current['next'] = current['next']['next']
            }
        }
    }

    public searching(query : string){
        let current : any = this.head;

        if(current){
            if(current['data'].car_name === query || 
               current['data'].car_brand === query || 
               current['data'].car_category === query)
            {
                return current
            }
        }

        while (!current['next']){
            current = current['next']

            if(current['data'].car_name === query || 
               current['data'].car_brand === query || 
               current['data'].car_category === query)
            {
                return current
            }
        }

        return 'Sin coincidencias'
    }
}

class Nodo {
    constructor(private data: DataType, private next?: null | Nodo) {
        this.data;
        this.next = this.next ? this.next : null;
    }
}