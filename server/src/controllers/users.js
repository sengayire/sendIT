import express from 'express';
import uuid from 'uuid/v1';
import parcels from '../data/parcels';
import users from '../data/users';

class UsersContollerrs{
// creating  User
static createUser((req, res) => {
  const { body } = req;

  if (!body.firstname || !body.lastname || !body.email || !body.password) {
    res.status(401).send({ message: 'Please provide all details' });
  }
  const user = {
    id: uuid(),
    name: body.name,
    email: body.email,
    password: body.password,
  };
  users.push(user);

  res.status(200).send({ user });
});

// get all available for a user
static getAllUsers((req, res) => {
  res.status(200).send(users);
});

// get a parcel for a single user
static getOneUserParcel((req, res) => {
  const { id } = req.params;
  const parcel = parcels.find(value => value.id === id);

  if (!parcel) {
    res.status(404).send({ message: 'user Not found!!!' });
  }
  res.status(200).send({
    parcel,
  });
});
static getOneUser((req, res) => {
  const { id } = req.params;
  const items = parcels.filter(value => value.userId === id);
  res.status(200).send({
    items,
  });
});
}
export default usersContoller;
