var express = require('express');
var router = express.Router();

router.get('/test', (req, res) =>{
  res.json({msg:"User Router"})
})

module.exports = router;