import { LinkedList } from '../classes';
import {
  DataType,
  TypedRequestBody,
  LinkedData,
  TypedRequestQuery,
  CustomQuery,
} from '../interfaces';
import { Response, Request } from 'express';

const controller: LinkedList = new LinkedList();

const insert = (req: TypedRequestBody<LinkedData>, res: Response) => {
  const { data } = req.body;
  const result = controller.insert(data);
  res.status(201).json(result);
};

const deletion = (req: TypedRequestQuery<CustomQuery>, res: Response) => {
  const { str } = req.query;

  try {
    const result = controller.deletion(str);

    res.send(result).status(200);
  } catch (error: any) {
    res.send(error.message).status(404);
  }
};

const searching = (req: TypedRequestQuery<CustomQuery>, res: Response) => {
  const { str } = req.query;

  const result = controller.searching(str);

  if (result == 'Sin coincidencias') {
    res.status(404).send(result);
    return;
  }

  res.json(result).status(200);
};

export { insert, deletion, searching };
