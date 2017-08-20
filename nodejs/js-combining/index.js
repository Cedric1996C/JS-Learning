var fs = require("fs"),
	path = require("path"),
	http = require("http");

var MIME = {
	'.css' : 'text/css',
	'.js' : 'application/javascript'
}

// function combineFiles(pathnames,callback){
// 	var output = [];

// 	(function next(index,len){
// 		if(index<len){
// 			fs.readFile(pathnames[index],function(err,data){
// 				if(err){
// 					callback(err);
// 				} else {
// 					output.push(data);
// 					next(index+1,len);
// 				}
// 			});
// 		} else {
// 			callback(null,Buffer.concat(output));
// 		}
// 	}(0,pathnames.length));
// }

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

function validateFiles(pathnames,callback){

	(function next(index,len){
		if(index<len){
			fs.stat(pathnames[index],function(err,stats){
				if(err){
					callback(err);
				} else if (!stats.isFile()){
					callback(new err);
				} else {
					next(index+1,len);
				}
			});
		} else {
			callback(null,pathnames);
		}
	}(0,pathnames.length));
}

function outputFiles(pathnames,writer){
	(function next(index,len){
		if(index<len){
			var reader = fs.createReadStream(pathnames[index]);

			reader.pipe(writer,{end:false});
			reader.on('end',function(){
				next(index+1,len);
			});
		} else {
			writer.end();
		}
	}(0,pathnames.length))
}

function main(args){
	var config = JSON.parse(fs.readFileSync(args[0], 'utf-8')),
		root = config.root || '.',
		port = config.port || 80 ,
		server;

	server = http.createServer(function(request,response){
		var urlInfo = parseURL(root,request.url);

	    validateFiles(urlInfo.pathnames, function (err, pathnames) {
	        if (err) {
	            response.writeHead(404);
	            response.end(err.message);
	        } else {
	            response.writeHead(200, {
	                'Content-Type': urlInfo.mime
	            });
	            outputFiles(pathnames, response);
	        }
	    });

    }).listen(port);

	process.on('SIGTERM', function () {
        server.close(function(){
            process.exit(0);
        });
    });

}

main(process.argv.slice(2));
