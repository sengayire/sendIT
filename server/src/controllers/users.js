
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

  // sign in
  static userSignIn(req, res) {
    const { email, password } = req.body;
    const User = users.find(user => user.email === email && user.password === password);
    if (!User) {
      return res.status(404).send({ message: 'user not found!!!' });
    }
    const index = users.indexOf(User);
    users[index].loggedIn = true;
    const userOn = users[index];
    return res.status(200).send(userOn);
  }

  // log out
  static logout(req, res) {
    const User = users.find(user => user.isloggedin === true);
    if (!User) {
      return res.status(404).send({ message: ' u are not logged in' });
    }
    const index = users.indexOf(User);
    users[index].loggedIn = false;
    const userOff = users[index];
    return res.status(200).send(userOff);
  }
}
export default UsersContollers;
