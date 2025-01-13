import express, { Request, Response } from 'express';
import { userSchema, loginSchema } from '../../db/schemas/user.schema';
import User from '../../db/models/user.model';
import validateSchema from '../../middlewares/validateSchema';
import authMiddleware from '../../middlewares/authMiddleware';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/signup', validateSchema(userSchema), async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, username, password }: { email: string, username: string, password: string } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            res.status(400).json({ message: 'Email already exists' });
            return;
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ email, username, password: hashedPassword });

        const userId = user._id;
        const token = jwt.sign({ userId }, process.env.JWT_SECRET as string, { expiresIn: '1d' });
        res.status(201).json({ message: 'User created successfully', token });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
});

router.post('/login', validateSchema(loginSchema), async (req: Request, res: Response) => {
    try {
        const { email, password } : { email: string, password: string } = req.body; 
        const user = await User.findOne({ email });

        if (!user) {
            res.status(401).json({ message: 'Wrong email or password' });
            return;
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            res.status(401).json({ message: 'Wrong email or password' });
            return;
        }
        const userId = user._id;
        const token = jwt.sign({ userId }, process.env.JWT_SECRET as string, { expiresIn: '1d' });
        res.status(200).json({
            message: 'Logged in successfully',
            token
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
});

export default router;