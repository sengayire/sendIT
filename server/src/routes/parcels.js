import express from 'express';
import parcelsController from '../controllers/parcels';

const parcelsRouter = express.Router();

// parcels routes
parcelsRouter.post('/', parcelsController.createParcel);
parcelsRouter.get('/:id', parcelsController.getOneParcel);
parcelsRouter.put('/:id/update', parcelsController.updateParcel);
parcelsRouter.get('/', parcelsController.getAllParcels);
parcelsRouter.put('/:id/cancel', parcelsController.cancelParcel);
parcelsRouter.delete('/:id/delete', parcelsController.deleteParcel);
parcelsRouter.get('/user/:id', parcelsController.getAllParcelUser);
export default parcelsRouter;
