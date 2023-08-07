import mongoose from 'mongoose';

export const connect = async () => {
    await mongoose.connect('mongodb+srv://nodejslearner:qwert12345@cluster0.qbpknn0.mongodb.net/twitter');
}