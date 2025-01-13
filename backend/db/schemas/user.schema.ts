import { z } from 'zod';

const userSchema = z.object({
    username: z.string().min(6).max(20),
    email: z.string().email(),
    password: z.string().min(8),
}).strict();

const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
}).strict();

export { userSchema, loginSchema };