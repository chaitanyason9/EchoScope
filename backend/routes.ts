import express from 'express';
import userRouter from './api/users/index';

const router = express.Router();

router.use('/api/v1', userRouter);

export default router;