import mongoose from 'mongoose';
import 'dotenv/config';


export const connect = async () => {
    await mongoose.connect(`${process.env.MONGO_URI}`);
}