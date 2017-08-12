window.onload=function(){
	var data = [10,30,40];

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
			newData.style.height = data[i]*2+"px";
			dataBox.appendChild(newData);
		}
	};

	var numJudge = function(){
		return (textNum.value >= 10 && textNum.value <= 100);
	}

	var totalJudge = function(){
		return data.length >= 60;
	}

	function leftIn(){
		if(textNum.value !== "" && numJudge()){
			if(totalJudge()){
				alert("数组长度不可超过60");
			} 
			else {
				data.unshift(textNum.value);
			}
		}
		showData()
	};

	function leftOut(){
		data.shift(textNum.value);
		showData()
	};

	function rightIn(){
		if(textNum.value !== "" && numJudge()){
			if(totalJudge()){
				alert("数组长度不可超过60");
			} 
			else {
				data.push(textNum.value);
			}
		}
		showData()
	};

	function rightOut(){
		data.pop(textNum.value);
		showData()
	};

	function sort(){
		data.sort(function(a,b){
			return a-b;
		});
		showData();
	}

	// console.log(buttons[1].value);
	buttons[1].onclick = leftIn;
	buttons[2].onclick = rightIn;
	buttons[3].onclick = leftOut;
	buttons[4].onclick = rightOut;
	buttons[5].onclick = sort;
	showData(); 


}
