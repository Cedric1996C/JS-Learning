const fs = require('fs');
const request = require('request');
const htmlparser = require('htmlparser');
const configFileName = './rss.txt';

function checkFile(){
	fs.exists(configFileName, function(exists){
		// body
		if(!exists){
			return next(new Error('File not found'));
		}
		next(null,configFileName);
	})
}

function readFile(configFileName){
	fs.readFile(configFileName,function(err,list){
		if(err) return next(err)
		list = list.toString()
				   .replace(/^\s+|\s+$/g,'')
				   .split("\n");
		next(null,list[0]);
	})
}

function parseFile(pathName){
	var handler = new htmlparser.RssHandler();
	var parser = new htmlparser.Parser(handler);
	parser.parseComplete(pathName);
}