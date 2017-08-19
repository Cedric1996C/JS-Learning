var fs = require("fs"),
	path = require("path"),
	http = require("http");

var MIME = {
	'.css' : 'text/css',
	'.js' : 'application/javascript'
}

function combineFiles(pathnames,callback){
	var output = [];

	(function next(index,len){
		if(index<len){
			fs.readFile(pathnames[index],function(err,data){
				if(err){
					callback(err);
				} else {
					output.push(data);
					next(index+1,len);
				}
			});
		} else {
			callback(null,Buffer.concat(output));
		}
	}(0,pathnames.length));
}

function parseURL(root, url){
	var base,pathname,parts;
	
	if(url.indexOf('??') === -1){
		url = url.replace('/','/??');
	} 

	parts = url.split('??');
	base = parts[0];
	pathnames = parts[1].split(',').map(function(name){
		return path.join(root,base,name);
	})

	return {
		mime: MIME[path.extname(pathnames[0])] || 'text/plain',
		pathnames : pathnames
	}
}

function main(args){
	var config = JSON.parse(fs.readFileSync(args[0], 'utf-8')),
		root = config.root || '.',
		port = config.port || 80 ;

	http.createServer(function(request,response){
		var urlInfo = parseURL(root,request.url);

		combineFiles(urlInfo['pathnames'],function(err,result){
			if(err) {
				response.writeHead(404);
				response.end(err.message);
			} else {
				response.writeHead(200, {
                    'Content-Type': urlInfo.mime
                });
                response.end(result);
			}
		});

	}).listen(port);

}

main(process.argv.slice(2));