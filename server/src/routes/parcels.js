import express from 'express';
import uuid from 'uuid/v1';

const router = express.Router();

let parcels = [
  {
    id: '3434-5656-5656-5667',
    from: 'huye',
    sender: 'prince',
    destination: 'kigali',
    riciever: 'mutabazi',
    status: 'delivered'
  },
];

// adding a parcel
router.post('/', (req, res) => {
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
  parcels = [...parcels, parcel];

  res.status(200).send({ parcel });
});

// add parcels using put
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
  };

  parcels = [...parcels, parcel];

  res.status(200).send({ parcel });
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

// deleting a parcel
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const parcel = parcels.find(value => value.id === id);

  if (!parcel) {
    res.status(404).send({ message: 'Not found!!!' });
  }
  parcels = parcels.filter(value => value.id !== id);

  res.status(200).send({
    message: 'parcel deleted successfull',
  });
});

// deleting all parcel
router.delete('/', (req, res) => {
  res.status(200).send({
    message: ' all parcels has been deleted',
  });
});
export default router;
