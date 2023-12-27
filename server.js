// express is used along with node.js to build api to make connection with database
const express = require('express');
// cors is used for manageing corss origin endpoints
const cors = require('cors');
// dotenv is used for security
const dotenv = require('dotenv');
// colors is used to colors in teriminal is usefull for development purpose
const colors = require('colors');
// morgan is used to monitor route
const morgan = require('morgan');
const connectDB = require('./config/db');

// dotenv ko config karna padta hai take usfile ka istmal data security purpose k liye ho
dotenv.config();

// mongoDB connection must be create below dotenv.config()
connectDB(); // connection code in db.js

// rest object
const app = express();

// middlewares : this are basic middlewares we can create multiple other middleware also to incearse security also we can create coustume middleware
app.use(cors());
app.use(express.json()); // JSON is used to convert error and read data in in STRING
app.use(morgan('dev')); // send api request breif detail in terminal

//routes
app.use('/api/v1/auth', require('./routes/userRoute'));
app.use('/api/v1/hindiStory', require('./routes/hindiStoryRoute'));
app.use('/api/v1/englishStory', require('./routes/englishStoryRoute'));
//home
app.get('/', (req, res) => {
  res.status(200).send({
    success: true,
    msg: 'server running',
  });
});

// PORT
const PORT = process.env.PORT || 8080;

// listen is necassery for app to fun with PORT
app.listen(PORT, () => {
  console.log(`SERVER Running ${PORT}`.bgGreen.white);
});
