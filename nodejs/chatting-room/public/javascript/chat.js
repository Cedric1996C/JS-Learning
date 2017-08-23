var Chat = function(socket){
	this.socket = socket;
};

Chat.prototype.sendMessage = function(room,text){
	var mes = {
		room:room,
		text:text
	}
	this.socket.emit('message',mes);
}

Chat.prototype.changeRoom = function(room){
	this.socket.emit('join',{
		newRoom:room
	});
}

Chat.prototype.processCommand = function(command){
	var words = command.split(' ');
	var command = words[0]
				  .substring(1,words[0]
				  .length-1).toLowerCase();
	var mes = false;
	switch(command){
		case 'room':
		words.shift();
		var room = words.join(' ');
		this.changeRoom(room);
		break;
		case 'nick':
		words.shift();
		var name = words.join(' ');
		this.socket.emitter.emit('nameAttempt',name)
		break;

		default:
		mes = 'Unrecognized command.';
		break;
	}	
	return mes;
}