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
  

  // var xx = {
  //   "access_token": "8064fec7-0584-4f02-b28b-95931fd99d44",
  //   "access_token_expires_in": 3600,
  //   "expires_in": 3600,
  //   "token_type": "Bearer",
  //   "refresh_token": "6a835d33-146e-4c1b-b327-9b9e84f5f76d",
  //   "refresh_token_expires_in": 3600,
  //   "correlation_id": "system-user-5",
  //   "credential_expired_timestamp": "2019-04-10T09:02:25Z"
  // }
  // // console.log(req.body.get('access_token'));
  // if (req.get('Content-Type')) {
  //   console.log("Content-Type: " + req.get('Content-Type'));
   
  // }
  
  
  // res.setHeader('Content-Type', 'application/json');
  // res.end(JSON.stringify(xx));

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