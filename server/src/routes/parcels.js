import express from 'express';
import { celebrate, Joi } from 'celebrate';


// import passport from '../midleware/passport';
// import authorize from '../midleware/auth';
import ParcelsController from '../controllers/parcels';

const parcelsRouter = express.Router();
// const secure = passport.authenticate('jwt',
// { session: false, failureRedirect: '/api/v1/unauthorized' });


// parcels routes
parcelsRouter.post('/create', ParcelsController.createTable);
parcelsRouter.post('/', ParcelsController.verify, celebrate({
  body: Joi.object().keys({
    authorization: Joi.string().required().trim(),
    origin: Joi.string().required().trim(),
    destination: Joi.string().required().trim(),
    userId: Joi.string().required(),
    createdDate: Joi.date().required(),
    price: Joi.number().required(),
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
