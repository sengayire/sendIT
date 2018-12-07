import express from 'express';
import { celebrate, Joi } from 'celebrate';
import parcelsController from '../controllers/parcels';

const parcelsRouter = express.Router();

// parcels routes
parcelsRouter.post('/', celebrate({
  body: Joi.object().keys({
    origin: Joi.string().required().trim(),
    destination: Joi.string().required().trim(),
    receiver: Joi.string().required().trim(),
    weight: Joi.number().integer().required(),
  }),
}), parcelsController.createParcel);

parcelsRouter.get('/:id', parcelsController.getOneParcel);
parcelsRouter.put('/:id/update', parcelsController.updateParcel);
parcelsRouter.get('/', parcelsController.getAllParcels);
parcelsRouter.put('/:id/cancel', parcelsController.cancelParcel);
parcelsRouter.delete('/:id/delete', parcelsController.deleteParcel);
parcelsRouter.get('/user/:id', parcelsController.getAllParcelUser);
export default parcelsRouter;
