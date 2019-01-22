import express from 'express';
import usersController from '../controllers/users';

const usersRouter = express.Router();

// users routes

usersRouter.post('/create', usersController.createTable);
usersRouter.post('/signup', usersController.signup);
usersRouter.get('/', usersController.allUsers);
usersRouter.get('/:id', usersController.oneUser);
usersRouter.post('/signin', usersController.singIn);
// usersRouter.get('/logout', usersController.logout);
// usersRouter.put('/login', user)

export default usersRouter;
