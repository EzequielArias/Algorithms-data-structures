import express, { Express } from 'express'
import bodyParser from 'body-parser';
import { router } from './routes';

const app  : Express = express();
const PORT : number = 8080;

app.use(bodyParser.json())
app.use('/', router)

export default app