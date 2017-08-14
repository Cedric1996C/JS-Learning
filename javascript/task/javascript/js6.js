window.onload=function(){
	var data = [];

	var dataBox = document.getElementById("box");
	var textNum = document.getElementsByTagName('textarea')[0];
	var buttons = document.getElementsByTagName('input');

	function leftIn(){
		var words = textNum.value;
		words = words.replace(/[^0-9a-zA-Z]/g, ' ');
		var arr = words.split(' ');
		for(var i=0;i<arr.length;i++){
			var newData = document.createElement('div');
			newData.className = "num";
			data.push(arr[i]);
			newData.innerHTML = arr[i];
			dataBox.appendChild(newData);
		}
	};

	function check(){
		var reg = textNum.value;
		if(reg != null && reg.length > 0){
			dataBox.innerHTML = data.map(function(d){
				d=d.replace(new RegExp(reg,'g'),'<span class="found">' + reg + '</span>');
				return '<div class="num">' + d + '</div>'
			}).join(' ');
		}
	};

	buttons[0].onclick = leftIn;
	buttons[1].onclick = check;

}
