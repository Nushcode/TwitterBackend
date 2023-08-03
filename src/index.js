const express = require('express');
const userRoutes = require('./routes/userRoutes');
const tweetRoutes = require('./routes/tweetRoutes');

const app = express();
app.use(express.json());
app.use('/user' , userRoutes);
app.use('/tweet', tweetRoutes);

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(5000, () => {
  console.log('Listening on port 5000');
});
