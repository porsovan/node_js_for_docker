'use strict';

const express = require('express');
var bodyParser = require('body-parser');
// const gmac = require('getmac');

var router = express.Router();
var path = __dirname + '/views/';

// Constants
const PORT = 9090;
const HOST = '0.0.0.0';

var jsonParser = bodyParser.json();

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

router.get("/login", function(req,res){
  res.sendFile(path + "login.html");
});

router.post("/notification/otp" ,jsonParser , function(req,res){
  console.log(req.body);
  res.send(req.body);
  
});

// App
const app = express();
// app.get('/', (req, res) => {
//   res.send('Hello world\n');
// });

app.use("/",router);
// app.use(bodyParser.text({
//   type: function(req) {
//     return 'text';
//   }
// }));
// app.use("*",function(req,res){
//   res.sendFile(path + "404.html");
// });

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);