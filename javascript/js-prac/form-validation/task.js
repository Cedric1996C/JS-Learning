window.onload = function(){

	const form = document.getElementsByTagName('form')[0];
	const cons = form.querySelectorAll('li');
	const tips = {
		user:"必填，长度为4~16字节",
		user_empty:"名称不能为空",
		user_true:"名称验证成功",
		password:"请输入密码",
		password_false:"密码长度为4~16字节",
		password_true:"密码可用",
		repassword:"请再次输入密码",
		repassword_true:"密码验证成功",
		repassword_false:"密码不一致，请重试!",
		email:"请输入邮箱",
		email_true:"邮箱验证成功",
		email_false:"邮箱格式错误，请重试",
		mobile:"请输入手机号码",
		mobile_true:"手机格式正确",
		mobile_false:"手机格式错误，请重试"
	}

	const checkData = {
		user: userCheck,
		password: passwordCheck,
		repassword:repasswordCheck,
		email:emailCheck,
		mobile:mobileCheck
	}

	const checkResult = {
		user:false,
		password:false,
		repassword:false,
		email:false,
		mobile:false
	}

	cons.forEach(function(con){
		var input = con.querySelector('input');
		input.onblur = function(){
			return checkData[input.id](input)
		};
		input.onfocus = function(){
			return !con.querySelector('span') ? createSpan(input): 0;
		}
	})

	form.addEventListener("submit", function (event) {
	    event.preventDefault();
	    setData();
	});

	function createSpan(input){
		var newSpan = document.createElement('span');
		newSpan.innerHTML = tips[input.id];
		input.parentNode.appendChild(newSpan);
	}


	function userCheck(input){
		var notation = input.parentNode.querySelector('span');
		var len = input.value.length;
		var charNum = 0;
		for(var i=0;i<len;i++){
			input.value[i].match(/[^x00-xff]/ig)===null ? charNum +=1 : charNum+=2;
		}
		if(charNum === 0){
			input.style.border="2px solid #FF6666";
			notation.innerHTML = tips['user_empty'];
			notation.style.color = "#ff6666";
			checkResult[input.id] = false;
		} else if (charNum<17 && charNum>3){
			input.style.border="2px solid #67BF7F";
			notation.innerHTML = tips['user_true'];
			notation.style.color = "#67BF7F";
			checkResult[input.id] = true;
		} else {
			checkResult[input.id] = false;
		}
	};

	function passwordCheck(input){
		var notation = input.parentNode.querySelector('span');
		var len = input.value.length;
		if(len>=6 && len<=16){
			input.style.border="2px solid #67BF7F";
			notation.innerHTML = tips['password_true'];
			notation.style.color = "#67BF7F";
			checkResult[input.id] = true;
		} else {
			input.style.border="2px solid #FF6666";
			notation.innerHTML = tips['password_false'];
			notation.style.color = "#ff6666";
			checkResult[input.id] = false;
		}
	}

	function repasswordCheck(input){
		var notation = input.parentNode.querySelector('span');
		var passw = cons[1].querySelector('input');
		if(input.value === passw.value && checkResult[passw.id]){
			input.style.border="2px solid #67BF7F";
			notation.innerHTML = tips['repassword_true'];
			notation.style.color = "#67BF7F";
			checkResult[input.id] = true;
		} else {
			input.style.border="2px solid #FF6666";
			notation.innerHTML = tips['repassword_false'];
			notation.style.color = "#ff6666";
			checkResult[input.id] = false;
		}
	}

	function emailCheck(input){
		var notation = input.parentNode.querySelector('span');
		var emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
		var matchResult = input.value.match(emailRegExp);
		if(matchResult){
			input.style.border="2px solid #67BF7F";
			notation.innerHTML = tips['email_true'];
			notation.style.color = "#67BF7F";
			checkResult[input.id] = true;
		} else {
			input.style.border="2px solid #FF6666";
			notation.innerHTML = tips['email_false'];
			notation.style.color = "#ff6666";
			checkResult[input.id] = false;
		}
	}

	function mobileCheck(input){
		var notation = input.parentNode.querySelector('span');
		var mobileRegExp = /^(\d{11})$/;
		var matchResult = input.value.match(mobileRegExp);
		if(matchResult){
			input.style.border="2px solid #67BF7F";
			notation.innerHTML = tips['mobile_true'];
			notation.style.color = "#67BF7F";
			checkResult[input.id] = true;
		} else {
			input.style.border="2px solid #FF6666";
			notation.innerHTML = tips['mobile_false'];
			notation.style.color = "#ff6666";
			checkResult[input.id] = false;
		}
	}

	function setData(){
	 	if(checkResult.user && checkResult.password && checkResult.repassword && checkResult.email && checkResult.mobile){
	 		alert("验证成功!");
	 	} else {
	 		alert("输入有误!");
	 	}
	}


}