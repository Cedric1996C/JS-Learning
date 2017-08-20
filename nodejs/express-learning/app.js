var express = require('express');
var app = express();

app.use(function(req,res,next){
	console.log('Time: ', Data.now());
	next()
})

app.use("/user/:id",function(req,res,next){
	console.log('Request Type:',req.method);
	next();
})

app.get("user/:id",function(req,res,next){
	res.send("user");
})

app.use('/user/:id', function(req, res, next) {
  console.log('Request URL:', req.originalUrl);
  next();
}, function (req, res, next) {
  console.log('Request Type:', req.method);
  next();
});

