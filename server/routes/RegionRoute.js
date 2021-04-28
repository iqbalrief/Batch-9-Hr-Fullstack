import { Router } from 'express';
import IndexCtrl from '../controllers/indexController'

const router = Router();
router.post('/', IndexCtrl.RegionCtrl.create);
router.get('/', IndexCtrl.RegionCtrl.findAll);
router.get('/:id', IndexCtrl.RegionCtrl.findOne);
router.delete('/:id',IndexCtrl.RegionCtrl.remove);
router.get('/rawsql/:id', IndexCtrl.RegionCtrl.rawSQL);

export default router;