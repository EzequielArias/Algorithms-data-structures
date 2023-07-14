import express from 'express'

import { enqueue,dequeue,peek,rear } from '../controller';

const router = express.Router();


router.post('/enqueue', enqueue);

router.delete('/dequeue', dequeue);

router.get('/peek',peek);

router.get('/rear', rear);

export default router;