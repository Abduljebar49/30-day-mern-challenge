import express from 'express';
import { addUser, deleteUser, getUser, getUsers } from '../controller/user.js';

const router = express.Router();

router.get('/users',getUsers);
router.get('/user/:id',getUser);
router.post('/user',addUser)
router.put('/user/:id',addUser)
router.delete('/user/:id',deleteUser)


export default router;