
import express from 'express';
import parcelsController from './controllers/parcels';
import usersContoller from './controllers/users';

const server = express();


server.use(express.json());
server.use(express.urlencoded( { extended: false 
}));

// fetching parcels
server.use('/api/v1/parcels', parcels);

// fetching Users 
server.use('/api/v1/users', users);


// assining a port for runing node
const port = 3000;


server.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});

export default server;
