import express from 'express';
import { connect } from './config/database.js';


const app = express();

app.listen(3000, async () => {
    await connect();
    console.log('Mongodb connected');
});