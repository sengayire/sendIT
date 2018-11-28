import express from 'express';
import uuid from 'uuid/v1';
import { celebrate, Joi } from 'celebrate';
import parcels from '../data/parcels';

const router = express.Router();


// adding a parcel
router.post('/', celebrate({
  body: Joi.object().keys({
    from: Joi.string().required().trim(),
    receiver: Joi.string().required().trim(),
    destination: Joi.string().required().trim(),
  }),
}), (req, res) => {
  const { body } = req;

  if (!body.from || !body.receiver || !body.destination) {
    res.status(401).send({ message: 'Please provide all details' });
  }
  const parcel = {
    id: uuid(),
    from: body.from,
    sender: body.sender,
    destination: body.destination,
    riceiver: body.receiver,
  };
  parcels.push(parcel);

  res.status(200).send(parcel);
});


// get all available parcels
router.get('/', (req, res) => {
  res.status(200).send(parcels);
});

// getting a single parcel by id
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const parcel = parcels.find(value => value.id === id);

  if (!parcel) {
    res.status(404).send({ message: 'Not found!!!' });
  }
  res.status(200).send({
    parcel,
  });
});

// canceling a parcel
router.put('/:id/cancel', (req, res) => {
  const { id } = req.params.body;
  const parcel = parcels.find(value => id.id === value.id);
  const index = parcels.indexOf(parcel);
  if (!index) {
    res.status(404).send({ message: 'Parcel Not found!!!' });
  }
  if (parcels[index].status === 'cancelled') {
    res.status(404).send({ message: 'Parcel has already been cancelled!!!' });
  }
  const items = parcels.filter(value => value.id === id);
  parcels[index].status = 'cancelled';
  res.status(200).send({
    message: 'Parcel has been canceled successfull',
    items,
  });
});


// update a parcel
router.put('/update/:id', (req, res) => {
  const { parcelid } = req.params;
  const parcel = parcels.find(value => value.id === id);
  const index = parcels.indexOf(parcel);
  if (!index) {
    return res.status(404).send({ message: 'parcel not found!!!' });
  }
  parcels[index].id = parcelid.id;
  parcels[index].from = parcelid.form;
  parcels[index].destination = parcelid.destination;
  parcels[index].weight = parcelid.weight;
  const updated = parcels[index];
  return res.status(200).send(updated);
});
export default router;
