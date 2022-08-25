
import {Router} from 'express';
import {getAll, create, remove, modify} from '../controlers/servers.js'
const router = Router();

router.get('/api/server', getAll);
router.post('/api/server', create);
router.delete('/api/server/:id', remove);
router.put('/api/server/:id', modify);

export default router;