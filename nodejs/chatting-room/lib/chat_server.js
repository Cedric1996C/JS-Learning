const socket = require('socket.io');

var io;
var guestNumber = 1;
var nickNames = {};
var nameUsed = [];
var currentRoom = {};

//分配用户昵称
function assignGuestName(socket,guestNumber,nickNames,nameUsed){
	var name = "Guest"+guestNumber;
	nickNames[socket.id] = name;
	socket.emit('nameResult', {
		success : true,
		name : name
	});
	nameUsed.push(name);
	guestNumber += 1;
		// console.log(nickNames[socket.id]);
	return guestNumber;
}

//进入聊天室
function joinRoom(socket,room){
	socket.join(room);
	currentRoom[socket.id] = room;
	socket.emit('joinResult', { room: room });
	socket.broadcast.to(room).emit('message',{
		text: nickNames[socket.id]+" has joined "+room
	});

	var usersInRoom = io.of('/').in(room).clients;
	if( usersInRoom.length>1){
		var usersInRoomSummary = 'Users currently in '+room+': ';
		for(var user in usersInRoom){
			var socketId = usersInRoom[user].id;
			if(socketId != socket.id){
				usersInRoomSummary += nickNames[userSocketId]+'/n';
			}
		}		
	} 

	socket.emit('message', { text : usersInRoomSummary });
}

//处理更改名称的请求
function handleNameChangeAttempts(socket,nickNames,nameUsed){
	socket.on('nameAttempt',function(name){
		if(name.indexOf('Guest') == 0){
			socket.emit('nameResult', {
				success:false,
				text: 'Names cannot begin with \'Guest\'. '
			});
		} else {
			if(nameUsed.indexOf(name) == -1){
				var previousName = nickNames[socket.id];
				var nicks = Object.keys(nickNames);
				var index = nicks.indexOf(previousName);
				nameUsed.push[name];
				nickNames[socket.id] = name;
				delete nameUsed[index];
				socket.emit('nameResult', {
					success: true,
					text: name
				});
				socket.broadcast.to(currentRoom[socket.id]).emit('message',{
					text: previousName+' has changed his name to '+name
				});
			} else {
				socket.emit('nameResutl',{
					success:false,
					text: 'This name has been used, please change one.'
				});
			}
		}
		console.log('name changed');
	});
}

//消息广播
function handleMessageBroadcasting(socket,nickNames){
	socket.on('message',function(mes){
		socket.broadcast.to(mes.room).emit('message',{ 
			text: nickNames[socket.id]+' : '+ mes.text 
		});
	});
}

//加入/创建房间 
function handleRoomJoin(socket){
	socket.on('join',function(room){
		socket.leave(currentRoom[socket.id]);
		joinRoom(socket,room.newRoom);
		console.log('Join '+room.newRoom);
	});
}

//断开连接
function handleClientDisconnetion(socket,nickNames,nameUsed){
	socket.on('disconnet',function(){
		var nameIndex = nameUsed.indexOf(nickNames[socket.id]);
		delete nameUsed[nameIndex];
		delete nickNames[socket.id];
	})
}

exports.listen = function(server){
	//让socket.io搭载在已有的服务器上
	io = socket.listen(server);
	// console.log("socket connect successfully!");

	io.set('log level',1);

	io.sockets.on('connection',function(socket){
		//用户连接时，给其分配一个昵称
		guestNumber = assignGuestName(socket,guestNumber,nickNames,nameUsed);
		//用户连接时，使其加入room:Cong J, 并处理相应的逻辑
		joinRoom(socket,'Cong J');
		handleMessageBroadcasting(socket,nickNames);
		handleNameChangeAttempts(socket,nickNames,nameUsed);
		handleRoomJoin(socket);

		//socket收到rooms请求时，返回房间列表
		socket.on('rooms',function(){
			var rooms = Object.keys(io.of('/').adapter.rooms);
			var result = rooms.filter(function(room){
				return (room.length<16)
			})
			socket.emit('rooms',result);
		})

		handleClientDisconnetion(socket,nickNames,nameUsed);
	});

};

