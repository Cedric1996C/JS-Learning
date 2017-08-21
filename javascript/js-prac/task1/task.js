window.onload = function(){

	const form = document.getElementsByTagName('form')[0];
	const input = form.querySelector('input');
	const notation = form.querySelector('span');

	form.addEventListener("submit",function(event){
		event.preventDefault();
		checkData();
	})

	function checkData(){
		var user = document.getElementById("user");
		var len = user.value.length;
		var charNum = 0;
		for(var i=0;i<len;i++){
			user.value[i].match(/[^x00-xff]/ig)===null ? charNum +=1 : charNum+=2;
		}
		if(charNum === 0){
			input.style.border="2px solid #FF6666";
			notation.innerHTML = "内容为空";
			notation.style.color = "#ff6666";
		} else if (charNum<17 && charNum>3){
			input.style.border="2px solid #67BF7F";
			notation.innerHTML = "验证成功";
			notation.style.color = "#67BF7F";
		}
		return;
	}
}