interface Payload{
    brand : string
    horsePower : number
    color : string
}

interface Message{
    msg : string
    status : number
}

class LinkedList {

    head : any
    _length : number

    constructor(){
        this.head = null;
        this._length = 0;
      }
    
    addNode(payload : Payload) :Message {
        let node = new Nodo(payload),
         current = this.head

        if(!current){
            this.head = node
            this._length++
            return {msg : "Nodo agregado", status : 200}
        }

        while(current.next !== null){
            current = current.next
        }

        current.next = node
        this._length++
        return {msg : "Nodo agregado", status : 200}
    }

    getAll():void {
        let current : any = this.head

        if(!current){
            console.log("No existen Nodos")
            return
        }

        while(current){
            console.log(current)
            current = current.next
        }
        console.log(current)
        return
    }

    removeLastNodo():void{
        if(!this.head) return null
        if(!this.head.next){
          let retornar = this.head.value;
          this.head = null
          return retornar
        }
        let current = this.head;
        while (current.next.next) {
          current = current.next;
        }
        const value = current.next.value
        current.next = null
        return value
      }
    
    searchBy(brand : string ) {
        let current = this.head

        if(current.value.brand === brand){
            return current
        }

        while(current.next !== null){
            current = current.next
            if(current.value.brand === brand){
                return current
            }
        }
        return `No se encontro el nodo`
    }  

    reverse(node : any) {
    var prev = null;
    var current = node;
    var next = null;
        while (current != null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        node = prev;
        return node;
}
}


class Nodo {
    value: any
    next: null

    constructor(value : any){
        this.value = value
        this.next = null
    }

}

const vagon = new LinkedList()

vagon.addNode({brand : "Toyota", horsePower : 320, color : "orange"})
vagon.addNode({brand : "RX7", horsePower : 180, color : "red"})
vagon.addNode({brand : "Mitsubishi", horsePower : 210, color : "blue"})
//vagon.removeLastNodo()
//vagon.getAll()
console.log(vagon.reverse(vagon))