window.onload = function(){
	
	const choices = document.getElementsByTagName("div");
	const state = choices[0].querySelectorAll("input");

	function init(){
		if(state[0].checked){
			choices[1].style.display = "flex";
			choices[2].style.display = "none";
		} else {
			choices[1].style.display = "none";
			choices[2].style.display = "flex";
		}
	}

	state.forEach(function(con){
		con.onclick = function(){
			return init()
		}
	})
}