function circleArea(radius){
	
	var area = Math.PI * (radius*radius); 

	return area; 

}

function userRadius(num){
	return num;
}


var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

ctx.beginPath();
ctx.arc(150,75,40,0,2 * Math.PI);
ctx.stroke();