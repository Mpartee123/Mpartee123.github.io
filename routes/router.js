const express = require("express");
const router = express.Router();
const path = require('path');
// app.use(serveStatic('public', {'index': ['default.html', 'default.htm']}));


router.get("/",function (req,res) {
    console.log(path.join(__dirname+'/../Public/index.html'));
  res.sendFile(path.join(__dirname+'/../Public/index.html'));
});

module.exports = router;