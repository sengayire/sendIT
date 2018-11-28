import express from 'express';
import uuid from 'uuid/v1';
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
  };
  users.push(user);

  res.status(200).send({ user });
});
// get all users
router.get('/', (req, res) => {
  res.status(200).send(users);
});

export default router;
