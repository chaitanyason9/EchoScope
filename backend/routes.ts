import express from 'express';
import userRouter from './api/users/index';

const router = express.Router();

router.use('/user', userRouter);

export default router;