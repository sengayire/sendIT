
import express from 'express';
import parcels from './routes/parcels';
// import users from './routes/users';

const server = express();


server.use(express.json());
server.use(express.urlencoded({ extends: false }));

// fetching parcels
server.use('/api/v1/parcels', parcels);

// fetching Users
// server.use('/api/v1/parcels', users);

// assining a port
const port = 3000;

server.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});

export default server;
