import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectDb = async() => {
    try {
        console.log(process.env.PORT)
        await mongoose.connect(process.env.MONGO_URI as string);
        console.log('Connected to database');
    } catch (err) {
        console.error('Error connecting to database:', err);
        process.exit(1);
    }
}

export default connectDb;