// Require all dependencies
var express = require("express");
var app = express();
const mongoose = require('mongoose')
const users = require('./routes/api/users');
const profiles = require('./routes/api/profiles');
const posts = require('./routes/api/posts');

// DB config
const Uri ='mongodb://kingsly8:kingsly8@ds225902.mlab.com:25902/developersconnect'
//const db = require('./config/keys')
//connect to mongodb
mongoose.connect(Uri)
    .then(() => console.log('MongoDb connect'))
    .catch(err => console.log(err));


// Use Routes
app.use('/api/users', users);
app.use('/api/profiles', profiles);
app.use('/api/posts', posts);

// Create Server
var port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server app running on port ${port}`));