import express from 'express';
import { insert, deletion, searching } from '../controller';

const router = express.Router();

router.post('/add', insert);

router.get('/search', searching);

router.delete('/remove', deletion);

export default router;
