import uuid from 'uuid';
import execute from './database';
import 'dotenv/config';

class queries {
  // creating a parcels table
  static create() {
    return execute(`CREATE TABLE IF NOT EXISTS parcels(
    id UUID PRIMARY KEY,
    origin VARCHAR(30),
    destination   VARCHAR(30),
    user_id VARCHAR(30),
    created_date DATE,
    price INT,
    present_location VARCHAR(20),
    weight int
  )`);
  }

  // inserting manuely data into database
  static insert(data = []) {
    execute(`INSERT INTO parcels (id, origin, destination, user_id, created_date, price, present_location, weight)
  VALUES($1,$2,$3,$4,$5,$6,$7,$8)`, data);
  }

  // retreiving data from database
  static select() {
    execute('SELECT * FROM parcels ORDER BY id ASC');
  }
}

export default queries;
