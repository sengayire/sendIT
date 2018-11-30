import express from 'express';
import usersController from '../controllers/users';
// import verify from '../../helpers';

const usersRouter = express.Router();

// users routes
usersRouter.post('/', usersController.createUser);
usersRouter.get('/', usersController.getAllUsers);
usersRouter.get('/:id', usersController.getOneUser);
usersRouter.get('/login', usersController.userSignIn);
usersRouter.get('/logout', usersController.logout);
// usersRouter.put('/login', user)

export default usersRouter;
