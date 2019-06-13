module.exports = {
  mongoURI: 'mongodb://kingsly8:kingsly7@ds019816.mlab.com:19816/websoft',
  secretOrKey: 'secret'
};





if(process.env.NODE_ENV === 'production') {
  module.exports = require('./keys_prod');
}else{
  module.exports = require('./keys_dev');
}