import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

async function authMiddleware(req: Request, res: Response, next: NextFunction) {
    try {
        const token = req.headers.authorization?.split(' ')[1] ?? '';
        if (!token) {
            res.status(401).json({ message: 'Missing token' });
            return;
        }
        jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded) => {
            if (err) {
                res.status(401).json({ message: 'Invalid token' });
                return;
            }
            req.params.userId = (decoded as any).userId;
            next();
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export default authMiddleware;