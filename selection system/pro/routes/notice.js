function socket(){
		var app = require('express')();
		var server = require('http').createServer(app);
		var io = require('socket.io')(server);
		var express = require('express');
		var router = express.Router();
		const assert = require('assert');
		var db = require('../public/javascripts/db.js');
//拿数据库数据
		db.query(function(db){
			db.collection('notice').find({}).toArray(function(err, docs) {
			console.log("Found the following records");
			// console.log(docs);
			//发送拿到的数据		
			io.on('connection', function(socket) {
				//发送socket信息的逻辑写在这里
				/* … */
				//监听
				// socket.on('sendMessage',function(data){
				// 	// console.log(data)
				// 	io.sockets.emit('getMessage',data)
				// });
				//发送
				io.sockets.emit('sendNotice',docs)
			});
			server.listen(3059);
			})
		})
	}

	module.exports = {
		socket
	}