import { Router } from "express";
const userRouter = Router();

userRouter.get('/', (req, res) => res.send({ message: 'Get user' }));
userRouter.get('/:id', (req, res) => res.send({ message: 'Get user details' }));
userRouter.post('/', (req, res) => res.send({ message: 'CREATE new user' }));
userRouter.put('/:id', (req, res) => res.send({ message: 'Update user' }));
userRouter.delete('/:id', (req, res) => res.send({ message: 'DELETE user' }));
export default userRouter; 