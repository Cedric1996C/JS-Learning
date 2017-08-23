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
	socket.emitter.emit('nameResult', {
		success : true,
		name : name
	});
	nameUsed.push(name);
	return guestNUmber++;
}

//进入聊天室
function joinRoom(socket,room){
	socket.join(room);
	currentRoom[socket.id] = room;
	socket.emitter.emit('joinResult', { room: room });
	socket.broadcast.to(room).emit('message',{
		text: nickNames[socket.id]+"has joined"+room
	});

	var usersInRoom = io.sockets.client(room);
	if( userInRoom.length>1){
		var usersInRoomSummary = 'Users currently in '+room+': ';
		for(var user in usersInRoom){
			var socketId = usersInRoom[user].id;
			if(socketId != socket.id){
				usersInRoomSummary += nickNames[userSocketId]+'/n';
			}
		}		
	} 

	socket.emitter.emit('message', { text : usersInRoomSummary});
}

//处理更改名称的请求
function handleNameChangeAttempts(socket,nickNames,nameUsed){
	socket.on{'nameAttempt',function(name){
		if(name.indexOf('Guest') == 0){
			socket.emit('nameResult', {
				success:false,
				text: 'Names cannot begin with \'Guest\'. '
			});
		} else {
			if(nameUsed.indexOf(name) == -1){
				var previousName = nickNames[socket.id];
				var index = nickNames.idnexOf(previousName);
				nameUsed.push[name];
				nickNames[socket.id] = name;
				delete nameUsed[index];
				socket.emitter.emit('nameResult', {
					success: true,
					text: name
				});
				socket.broadcast.to(currentRoom[socket.id]).emit('message',{
					text: previousName+' has changed his name to '+name;
				});
			} else {
				socket.emit('nameResutl',{
					success:false,
					text: 'This name has been used, please change one.'
				});
			}
		}
	}};
}

//消息广播
function handleMessageBroadcasting(socket,nickNames){
	socket.on('message',function(mes){
		socket.broadcast.to(room).emit('message',{ 
			text: nickNames[socket.id]+' : '+ mes.text 
		});
	});
}

//加入/创建房间 
function roomRoomJoin(socket){
	socket.on('join',function(mes){
		socket.leave(currentRoom[socket.id]);
		joinRoom(socket,mes.newRoom);
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
			socket.emit('rooms', io.socket.manager.rooms);
		})

		handleClientDisconnetion(socket,nickNames,nameUsed);
	});

};

