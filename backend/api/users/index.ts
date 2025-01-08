import express, { Request, Response } from 'express';
import schema from '../../db/schemas/user.schema';
import validateSchema from '../../middlewares/validateSchema';

const router = express.Router();

router.post('/signup', validateSchema(schema), (req: Request, res: Response) => {
    try {
        
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
});

export default router;