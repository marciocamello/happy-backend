import {Router} from 'express';
import multer from 'multer';

// Upload config
import uploadConfig from './config/upload';

// Controllers
import OrphanagesController from './controllers/OrphanagesController';

const route = Router();
const upload = multer(uploadConfig);

route.get('/orphanages', OrphanagesController.index);
route.get('/orphanages/:id', OrphanagesController.show);
route.put('/orphanages/:id', OrphanagesController.update);
route.delete('/orphanages/:id', OrphanagesController.delete);
route.post('/orphanages', upload.array('images'), OrphanagesController.create);

export default route;