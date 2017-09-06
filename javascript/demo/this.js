var num = 2;

function getNum(){
	return this.num;
}

function demo(num){
	this.num = num
}

var d = new demo(3);

console.log(getNum.call(d));

module.exports = {
	getNum:getNum
}