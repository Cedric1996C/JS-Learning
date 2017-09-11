var a = 1;
function test(){
	var a = 2;
	var e = eval;
	e('console.log(a)');
}

test();