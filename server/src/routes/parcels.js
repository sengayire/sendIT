import express from 'express';
import parcelsController from '../controllers/parcels';

const router = express.Router();

// parcels routes
router.post('/', parcelsController.createParcel);
router.get('/:id', parcelsController.getOneParcel);
router.put('/:id/update', parcelsController.updateParce);
router.get('/', parcelsController.getAllParcels);
router.put('/:id/cancel', parcelsController.cancelParcel);
router.delete('/:id/delete', parcelsController.delete);
