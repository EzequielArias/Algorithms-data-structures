import { LinkedList } from "../classes"
import { DataType, TypedRequestBody, LinkedData } from "../interfaces"


const controller : LinkedList = new LinkedList(null,0,null)

const insert = (req : TypedRequestBody<LinkedData>, res : Response) => {

    const { data } = req.body
    
    return controller.insert(data)
}

export { insert }

