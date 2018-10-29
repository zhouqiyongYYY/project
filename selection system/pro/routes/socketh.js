	function socket(){
		var app = require('express')();
		var server = require('http').createServer(app);
		var io = require('socket.io')(server);
		io.on('connection', function(socket) {
			//发送socket信息的逻辑写在这里
			/* … */
			//监听
			socket.on('sendMessage',function(data){
				// console.log(data)
				io.sockets.emit('getMessage',data)
			});
			//发送
		});
		server.listen(3060);
	}

	module.exports = {
		socket
	}


	