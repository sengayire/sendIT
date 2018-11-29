import express from 'express';
import usersController from '../controllers/users';

const usersRouter = express.Router();

// users routes
usersRouter.post('/', usersController.createUser);
usersRouter.get('/', usersController.getAllUsers);
usersRouter.get('/:id', usersController.getOneUser);

export default usersRouter;
