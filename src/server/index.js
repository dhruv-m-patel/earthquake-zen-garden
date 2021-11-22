import dotenv from 'dotenv';
import app from './app';

dotenv.config();
global.Promise = require('bluebird').Promise;

app.listen(process.env.PORT || 3000, () => {
  console.log('Earthquake Zen Garden app has started...');
});
