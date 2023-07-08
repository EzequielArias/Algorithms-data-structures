import { LinkedList } from "../classes"
import { DataType, TypedRequestBody, LinkedData } from "../interfaces"


const controller : LinkedList = new LinkedList()

const insert = (req : TypedRequestBody<LinkedData>, res : any) => {

    const { data } = req.body
    
    controller.insert(data)
    res.status(200)
}

const deletion = () => {}

const searching = () => {}

export { insert, deletion, searching }

