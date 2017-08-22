const http = require('http');
const fs = require('fs');
const path = require('path');
const mime = require('mime');
const cache = {};

const port = 8080;

//当文件不存在时，返回错误状态码404
function fileNotFound(response){
	response.writeHead(404,{'Content-Type':'text/plain'});
	response.write('Error404, file not found!');
	response.end();
}

//发送文件内容
function sendContent(response,pathname,pathContent){
	response.writeHead(200, {'Content-Type':mime.lookup(path.basename(pathname))})
	response.end(pathContent);
}

//判断文件是否缓存在内存中，如果是则返回；不然先缓存，寻找不到则返回404
function serveStatic(response,cache,abspath){
	if(cache[abspath]){
		sendContent(response,abspath,cache[abspath]);
	} else {
		fs.exists(abspath,function(exists){
			if(exists){
				fs.readFile(abspath,function(err,data){
					if(err){
						fileNotFound(response);
					} else {
						cache[abspath] = data;
						sendContent(response,abspath,data);
					}
				});
			} else {
				fileNotFound(response);
			}
		});
	}
}

//http服务器 
var server = http.createServer(function(req,res){
	var filePath = false;

	if(req.url == '/'){
		filepath  = "public/index.html"; 
	} else {
		filepath = "public"+req.url;
	}
	var abspath = './'+filepath;
	serveStatic(res,cache,abspath);
}).listen(port)