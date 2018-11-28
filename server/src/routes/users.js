import express from 'express';
import usersController from '../controllers/users';

const router = express.Router();
// parcels routes
router.post('/', usersController.createUser);
router.get('/:id', usersController.getOneUserParcel);
router.get('/', usersController.getAllUsers);
router.put('/:id', usersController.getOneUser);
