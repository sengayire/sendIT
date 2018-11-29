
import uuid from 'uuid/v1';
import users from '../data/users';

class UsersContollers {
  // creating  new User
  static createUser(req, res) {
    const { name, email, password } = req.body;

    if (!name) {
      return res.status(400).send({ message: 'Please provide all details' });
    }
    const user = {
      id: uuid(),
      name,
      email,
      password,
    };
    users.push(user);

    return res.status(201).send({
      message: 'user created successfully',
      user,
    });
  }

  // get all available user
  static getAllUsers(req, res) {
    return res.status(200).send(users);
  }

  // get a parcel for a single user

  static getOneUser(req, res) {
    const { id } = req.params;
    const items = users.find(value => value.id === id);
    res.status(200).send({
      items,
    });
  }
}
export default UsersContollers;
