import express from 'express';
import uuid from 'uuid/v1';
import parcels from '../data/parcels';
import users from '../data/users';

const router = express.Router();


// creating  User
router.post('/', (req, res) => {
  const { body } = req;

  if (!body.firstname || !body.lastname || !body.email || !body.password) {
    res.status(401).send({ message: 'Please provide all details' });
  }
  const user = {
    id: uuid(),
    name: body.name,
    email: body.email,
    password:body.password,
  };
  users.push(user);

  res.status(200).send({ user });
});
// get all available for a user
router.get('/', (req, res) => {
  res.status(200).send(users);
});

// get a parcel for a single user
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const parcel = user.find(value => value.id === id);

  if (!user) {
    res.status(404).send({ message: 'user Not found!!!' });
  }
  res.status(200).send({
    parcel,
  });
});

router.get('/:id/parcels', (req, res) => {
  const { id } = req.params;
  const items = parcels.filter(value => value.userId === id);
  res.status(200).send({
    items,
  });
});

export default  router;

