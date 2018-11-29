
import express from 'express';
import parcelsRouter from './routes/parcels';
import usersRouter from './routes/users';
import 'babel-polyfill';

const server = express();


server.use(express.json());
server.use(express.urlencoded({ extended: false }));

// fetching parcels
server.use('/api/v1/parcels', parcelsRouter);

// fetching Users
server.use('/api/v1/users', usersRouter);


// assining a port for runing node
const port = 3000;


server.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});

export default server;
