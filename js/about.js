
var boolean= true;
function moveBallDown(){
	var ball= document.getElementById('ball');
	if (boolean){
		ball.style.marginTop= "200px";
		boolean= false;
	}else{
		ball.style.marginTop= "0px";
		boolean= true;
	}	
}
