import express from 'express';
import uuid from 'uuid/v1';

const router = express.Router();

const users = [
  {
    id: '3434-5656-5656-5667',
    firstname: ' prince',
    midlename: 'gikundiro',
    lastname: 'sengayire',
    email: ' psengayire@gmail.com',
    password: '',
  },
];
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
  };
  users = [...users, user];

  res.status(200).send({ user });
});
// get all available parcels
router.get('/', (req, res) => {
  res.status(200).send(users);
});

export default users;
