var express = require('express');
var router = express.Router();
var photo = require('../models/photo');
var path = require('path');
var fs = require('fs');
var join = path.join;

var form = function(req,res){
	res.render('photos/upload',{
		title: 'Photo Upload'
	})
};

var submit = function(dir){
	return function(req,res,next){
		var img = req.files.photo.image;
		var name = req.body.photo.name || img.name;
		var path = join(dir,img.name);
		fs.rename(img.path,path,function(err){
			if(err) return next(err)
			photo.create({
				name:name,
				path:img.name
			},function(err){
				if(err) return next(err)
				res.redirect('/');
			})
		})
	}
}

module.exports.form = form;
module.exports.submit = submit;