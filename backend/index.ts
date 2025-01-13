import express from 'express';
import connectDb from './db/connect';
import rootRouter from './routes';
import cors from 'cors';

const app: express.Application = express();

app.use(cors());
app.use(express.json());

connectDb();

app.use('/api/v1/', rootRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});