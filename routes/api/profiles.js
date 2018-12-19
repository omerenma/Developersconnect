var express = require('express');
var router = express.Router();

router.get('/test', (req, res) =>{
  res.json({msg:"User Profile"})
})

module.exports = router;