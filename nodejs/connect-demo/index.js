const connect = require('connect');
const logger = require('./logger');
const app = connect();

app.use(logger(":method :url"))
   .use(hello)
   .listen(8080);

// app.use(logger);


// function logger(req,res,next){
// 	console.log("%s %s",req.method,req.url);
// 	next();
// }

function hello(req, res){
	res.setHeader('Content-Type','text/plain');
	res.end('Hello world');
}