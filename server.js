'use strict';

const express = require('express');
var router = express.Router();
var path = __dirname + '/views/';

// Constants
const PORT = 9090;
const HOST = '0.0.0.0';


// Router 
router.use(function (req,res,next){
  console.log("/" + req.method);
  next();
});

router.get("/", function(req,res){
  res.sendfile(path + "index.html");
});

router.get("/about", function(req,res){
  res.sendFile(path + "about.html");
});

router.get("/contact",function(req,res){
  res.sendFile(path + "contact.html");
});


// App
const app = express();
// app.get('/', (req, res) => {
//   res.send('Hello world\n');
// });

app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);