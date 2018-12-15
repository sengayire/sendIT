import express from 'express';
import { celebrate, Joi } from 'celebrate';
import ParcelsController from '../controllers/parcels';

const parcelsRouter = express.Router();


// parcels routes
parcelsRouter.post('/create', ParcelsController.createTable);
parcelsRouter.post('/', celebrate({
  body: Joi.object().keys({
    origin: Joi.string().required().trim(),
    destination: Joi.string().required().trim(),
    userId: Joi.string().required(),
    createdDate: Joi.date().required(),
    price: Joi.string().required(),
    presentLocation: Joi.string().required().trim(),
    weight: Joi.number().integer().required(),
  }),
}), ParcelsController.createParcel);

parcelsRouter.get('/:id', ParcelsController.getOneParcel);
parcelsRouter.put('/:id/update', ParcelsController.updateParcel);
parcelsRouter.get('/', ParcelsController.getAllParcels);
parcelsRouter.put('/:id/cancel', ParcelsController.cancelParcel);
parcelsRouter.delete('/:id/delete', ParcelsController.deleteParcel);
parcelsRouter.get('/user/:id', ParcelsController.getAllParcelUser);
export default parcelsRouter;
