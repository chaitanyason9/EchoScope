import { z } from 'zod';
import { Request, Response, NextFunction } from 'express';

function validateSchema(schema: z.ZodSchema) {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { success } = await schema.safeParse(req.body);
            if (success) {
               next();
               return;
            }
            res.status(400).json({ message: 'Invalid request data' })
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: 'Internal server error' });
        }
    };
}

export default validateSchema;