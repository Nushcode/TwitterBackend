import express from 'express';
import { connect } from './config/database.js';

import service from './services/tweet-service.js';

const app = express();

app.listen(3000, async () => {
    await connect();
    console.log('Mongodb connected');
    let ser = new service();
    await ser.create({content: 'done with #REFACTOR'})
});