window.onload=function(){
	var data = [1,3,4];

	var dataBox = document.getElementById("box");
	var textNum = document.getElementsByName("number")[0];
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

	var numJudge = function(){
		return (textNum.value >= 10 && textNum.value <= 100);
	}

	function leftIn(){
		if(textNum.value !== ""){
			console.log(numJudge());
			data.unshift(textNum.value);
		}
		showData()
	};

	function leftOut(){
		data.shift(textNum.value);
		showData()
	};

	function rightIn(){
		if(textNum.value !== ""){
			data.push(textNum.value);
		}
		showData()
	};

	function rightOut(){
		data.pop(textNum.value);
		showData()
	};

	// console.log(buttons[1].value);
	buttons[1].onclick = leftIn;
	buttons[2].onclick = rightIn;
	buttons[3].onclick = leftOut;
	buttons[4].onclick = rightOut;
	showData(); 


}
