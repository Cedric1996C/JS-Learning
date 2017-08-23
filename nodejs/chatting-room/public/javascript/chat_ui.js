window.onload = function(){

function divEscapedContentElement(mes){
	return $('<div></div').text(mes);
}

function divSystemContentElement(mes){
	return $('<div></div>').html('<li>'+mes+'</li');
}

function divEscapedRoom(room){
	return $('<p></p>').text(room);
}

function processUserInput(chatApp,socket){
	var message = $('input').val();
	var systemMessage;

	if(message.charAt(0) == '/'){
		systemMessage = chatApp.processCommand(message);
		if(systemMessage){
			$('#chat-area').append(divSystemContentElement(systemMessage));
		}
	} else {
		chatApp.sendMessage($('#room-name').text(),message);
		$('#chat-area').append(divEscapedContentElement(message));
		$('#chat-area').scrollTop($('#chat-area').prop('scrollHeight'));
	}
	$('input').val('');
}

var socket = io.connect();

$(document).ready(function(){
	
	var chatApp = new Chat(socket);
	socket.on('nameResult',function(result){
		var mes;
		console.log(result);
		if(result.success){
			mes = 'You are now known as '+result.text+'.';
		} else {
			mes = result.text;
		}
		$('#chat-area').append(divSystemContentElement(mes));
	});

	socket.on('joinResult',function(result){
		$('#room-name').text(result.room);
		$('#chat-area').append(divSystemContentElement('Room changed.'));
	})

	socket.on('message',function(result){
		var newElement = $('<div></div>').text(result.text);
		$('#chat-area').append(newElement);
	});

	socket.on('rooms',function(result){
		$('#room-list').empty();
		result.forEach(function(room){
			if(room != ''){
				$('#room-list').append(divEscapedRoom(room));
			}
		});

		$('#room-list p').click(function(){
			chatApp.processCommand('/room '+$(this).text());
			$('input').focus();
		});
	});

	$('#room-list p').click(function(){
		chatApp.processCommand('/room '+$(this).text());
		$('input').focus();
	});

	//定期请求可用房间列表
	setInterval(function(){
		socket.emit('rooms');
	}, 1000)
	$('input').focus();

	$('form').submit(function(){
		processUserInput(chatApp,socket);
		return false;
	});

});

}

