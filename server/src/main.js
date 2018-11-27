
import express from 'express';
import parcels from './routes/parcels';
import users from './routes/users';
import execute from './database/database';
import 'dotenv/config';
import uuid from     "uuid";

const server = express();


server.use(express.json());
server.use(express.urlencoded( { extended: false 
}));



// fetching parcels
server.use('/api/v1/parcels', parcels);

// fetching Users
server.use('/api/v1/users', users);

// creating a parcels table
execute(`CREATE TABLE IF NOT EXISTS parcels(
  id UUID PRIMARY KEY,
  origin VARCHAR(30),
  destination   VARCHAR(30),
  user_id VARCHAR(30),
  created_date DATE,
  price INT,
  present_location VARCHAR(20),
  weight int
)`)

//inserting manuely data into database 
execute(`INSERT INTO parcels
VALUES($1,$2,$3,$4,$5,$6,$7,$8)`,[uuid.v1(),'kevin','kigali',123898,new Date(),4000,'kamonyi',200])

// retreiving data from database 
execute('SELECT * FROM parcels ORDER BY id ASC');
// assining a port for runing node
const port = 3000;


server.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});

export default server;
