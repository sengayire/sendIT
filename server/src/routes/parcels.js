import express from 'express';
import uuid from 'uuid/v1';
import parcels from '../data/parcels';
import execute from '../database/database';

const router = express.Router();

// adding a parcel
router.post('/', (req, res) => {
  const { body } = req;

  if (!body.from || !body.receiver || !body.destination) {
    res.status(400).send({ message: 'Please provide all details' });
  }
  const parcel = {
    id: uuid(),
    from: body.from,
    sender: body.sender,
    destination: body.destination,
    riceiver: body.receiver,
    userId: body.userId,
  };
  parcels.push(parcel);

  res.status(200).send({ parcel });
});

// update parcel
router.put('/', (req, res) => {
  const { body } = req;
  if (!body.from || !body.receiver || !body.destination) {
    res.status(404).send({ message: ' details mising!!!' });
  }
  const parcel = {
    id: uuid(),
    from: body.from,
    sender: body.sender,
    destination: body.sender,
    receiver: body.receiver,
    userId: body.userId,
  };

  parcels.push(parcel);

  res.status(200).send({ essage: ' details mising!!!',
  parcel });
});

// get all available parcels
router.get('/', (_req, res) => {
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

// cancel a parcel
router.put('/:id/cancel', (req, res) => {
  const { id } = req.params;
  const parcel = parcels.find(value => value.id === id);

  if (!parcel) {
    res.status(404).send({ message: 'Not found!!!' });
  }
  res.status(200).send({
    message: 'parcel deleted successfull',
    items,
  });
});

// deleting all parcel
router.delete('/', (req, res) => {
  res.status(200).send({
    message: ' all parcels has been deleted',
  });
});



export default router
