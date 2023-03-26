const  express = require('express');
const bodyParser = require ('body-parser');
const cors = require('cors');
const ErrorMiddleware = require('./middleware/error');
const User = require('./router/userRoute');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
require('dotenv').config({path:'./config/config.env'});

app.use(cors({
    origin: '*'
}));

app.use('/api/v1',User);
//middleware for error
app.use(ErrorMiddleware)
 module.exports = app;