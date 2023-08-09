import express from 'express';
import bodyParser from 'body-parser';
import { connect } from './config/database.js';



import service from './services/tweet-service.js';
import UserRepository  from './repository/user-repository.js';
import TweetRepository from './repository/tweet-repository.js';
import LikeService from './services/like-service.js';

import apiRoutes from './routes/index.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', apiRoutes);


app.listen(3000, async () => {
    console.log('server started');
    await connect();
    console.log('Mongo db connected');
    const repo = new UserRepository();
    const twetrepo = new TweetRepository();
    const tweets = await twetrepo.getAll(0,10);
    const user = await repo.getAll();
    const likeService = new LikeService();
    const userId = user[1].id; // Assuming you want the first user's ID
    await likeService.toggleLike(tweets[0].id , 'Tweet' , userId);
    console.log(tweets[0].id , 'Tweet' , userId);

});