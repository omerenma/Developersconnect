// Require all dependencies
const express = require("express");
var app = express();
const path = require('path');
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
const db = require('./config/keys').mongoURI;
//connect to mongodb 
mongoose.connect(db)
    .then(() => console.log('MongoDb connect'))
    .catch(err => console.log(err));
// Passport middleware
app.use(passport.initialize());
// Passport config
require('./config/passport')(passport);

// Use Routes
app.use('/api/users', users);
app.use('/api/profiles', profiles);
app.use('/api/posts', posts);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
// Create Server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server app running on port ${port}`));

