import express, { Express } from 'express'
import bodyParser from 'body-parser';
import { router } from './routes';

const app  : Express = express();
const PORT : number = 8080;

app.use(bodyParser.json())

app.use('/', router)

app.listen(PORT, () => {
    console.log(`Listening on port : ${PORT}`)
})
