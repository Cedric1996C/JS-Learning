function rectCover(number)
{
    if(number===0)
    	return 1;
    else if(number ===1)
    	return 1;
    else if(number === 2)
    	return 2;
    else {
    	number-=2;
    	var temp = [1,2];
    	while(number > 0){
    		temp.push(temp[0]+temp[1])
    		temp.shift();
    		number--;
    	}
    	return temp[1];
    }
    // write code here
}

rectCover(5);

module.exports = {
    rectCover : rectCover
};