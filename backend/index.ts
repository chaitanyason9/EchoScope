import express from 'express';
import connectDb from './db/connect';
import rootRouter from './routes';

const app: express.Application = express();

app.use(express.json());

connectDb();

app.use(rootRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});