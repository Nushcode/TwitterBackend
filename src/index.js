import express from 'express';
import bodyParser from 'body-parser';
import { connect } from './config/database.js';
import passport from 'passport';
import { passportAuth } from './config/jwt-middleware.js';
import bcrypt from 'bcrypt'


import service from './services/tweet-service.js';
import UserRepository  from './repository/user-repository.js';
import TweetRepository from './repository/tweet-repository.js';
import LikeService from './services/like-service.js';

import apiRoutes from './routes/index.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(passport.initialize());

passportAuth(passport);

const hashedPasswordFromDatabase = '$2b$09$f.m.4QX/qwbIQhNFpSLGwOoJOYiNPXIdLntLzWMqaRqcqRGfg107W';
const plainPassword = '1244';

try {
    const isMatch = bcrypt.compareSync(plainPassword, hashedPasswordFromDatabase);
    console.log('Password match:', isMatch);
} catch (error) {
    console.error('Error comparing passwords:', error);
}

app.use('/api', apiRoutes);


app.listen(3000, async () => {
    console.log('server started');
    await connect();
    console.log('Mongo db connected');
});