// Require all dependencies
const express = require("express");
var app = express();
const bodyPaser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport')
const jwt = require('jsonwebtoken');
module.exports = jwt;
// Require route files
const users = require('./routes/api/users');
const profiles = require('./routes/api/profiles');
const posts = require('./routes/api/posts');


//Body parser middleware
app.use(bodyPaser.urlencoded({extended:false}));
app.use(bodyPaser.json());

// DB config
//const uri = 'mongodb://kingsly8:kingsly8@ds225902.mlab.com:25902/developersconnect'
//const db = require('./config/keys').mongoURI;
//connect to mongodb 
mongoose.connect('mongodb://localhost:27017/devconnectors')
    .then(() => console.log('MongoDb connect'))
    .catch(err => console.log(err));
// Passport middleware
app.use(passport.initialize());
// Passport config
require('./config/passport')(passport);

// Use Routes
app.use('/api/users', users);
app.use('/api/profiles', profiles);
//app.use('/api/posts', posts);

// Create Server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server app running on port ${port}`));

