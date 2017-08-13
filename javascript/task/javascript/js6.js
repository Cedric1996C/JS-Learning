window.onload=function(){
	var data = [1,3,4];

	var dataBox = document.getElementById("box");
	var textNum = document.getElementsByTagName('textarea')[0];
	var buttons = document.getElementsByTagName('input');

	function showData(){
		while(dataBox.hasChildNodes()){
			dataBox.removeChild(dataBox.firstChild);
		}
		for(var i=0;i<data.length;i++){
			var newData = document.createElement('div');
			newData.className = "num";
			newData.innerHTML = data[i];
			dataBox.appendChild(newData);
		}
	};

	function leftIn(){
		var words = textNum.value;
		words = words.replace(/[^0-9a-zA-Z]/g, ' ');
		var arr = words.split(' ');
		for(var i=0;i<arr.length;i++){
			data.unshift(arr[i]);
		}
		showData()
	};

	function check(){
		var reg = textNum.value;
		var words = dataBox.childNodes;
		for(var i=0;i<words.length;i++){
			
		}
		showData()
	};

	buttons[0].onclick = leftIn;
	buttons[1].onclick = check;
	showData(); 

}
