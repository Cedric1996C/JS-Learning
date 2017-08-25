const http = require('http');
const fs = require('fs');
const parse = require('url').parse;
const join = require('path').join;

var root = './lib';
var items = [];

var server = http.createServer(function(req,res){
	var url = parse(req.url);
	var path = join(root,url.pathname);

	fs.stat(path,function(err,stat){
		if(err){
			if('ENOENT' == err.code){
				res.statusCode = 404;
				res.end('File not found');
			} else {
				res.statusCode = 500;
				res.end('Interval server error');
			} 
		} else {
			res.setHeader('Content-Length',stat.size);
			var stream = fs.createReadStream(path);
			stream.pipe(res);
		}
	})
}).listen(3000);

var formServer = http.createServer(function(req,res){
	if('/' == req.url){
		switch(req.method){
			case 'GET':
				show(res);
				break;
			case 'POST':
				solve(req,res);
				break;
			default:
				badRequest(req,res);
		}
	} else {
		notFound(req,res);
	}
}).listen(8080);

function show(res){
	items.forEach(res.write(item));
	res.end();
}
