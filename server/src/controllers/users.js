
import uuid from 'uuid/v1';
import execute from '../database/database';

class UsersControllers {
  // creating users table
  static async createTable(req, res) {
    const createTable = `CREATE TABLE users(
    id UUID  PRIMARY KEY,
    firstName VARCHAR(30),
    lastName   VARCHAR(30),
    email VARCHAR(30),
    password VARCHAR(30)
    )`;
    res.status(200).send({
      message: 'users table created successfull,',
    });
    return execute(createTable);
  }

  // user signup API
  static async signup(req, res) {
    const {
      firstName, lastName, email, password,
    } = req.body;
    if (!firstName || !lastName || !email || !password) {
      res.status(203).send({
        message: 'please provide all igetnformation ',
      });
    }
    const createUser = 'INSERT INTO users VALUES( $1,$2,$3,$4,$5) RETURNING*';
    const user = [
      uuid(), firstName, lastName, email, password,
    ];
    const record = await execute(createUser, user);
    res.status(200).send({
      message: 'USER CREATED SUCCESSFULLY',
      record: record[1],
    });
  }

  // get all users
  static async allUsers(req, res) {
    const all = 'SELECT * FROM users';
    const record = await execute(all);
    if (record) {
      res.status(200).send({
        record,
      });
    } else {
      res.status(203).send({
        message: 'user no user found',
      });
    }
  }

  // get one user
  static async oneUser(req, res) {
    const { id } = req.params;

    const all = 'SELECT * FROM users WHERE id = $1';
    const record = await execute(all, [id]);
    const row = [record];
    if (row) {
      res.status(200).send({
        row,
      });
    } else {
      res.status(203).send({
        message: 'no user found with given id',
      });
    }
  }

  // user SignIn
  static async singIn(req, res) {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).send({
        message: 'please provide email and password',
      });
    }
    const getUser = 'SELECT * FROM users WHERE email = $1';
    const row = await execute(getUser, email);
    const user = [row];
    if (!user) {
      res.status(400).send({
        message: 'Wrong email or password',
      });
    } else {
      res.status(200).send({
        message: 'Loging successfully',
        user: user[0],
      });
    }
  }
}
export default UsersControllers;
