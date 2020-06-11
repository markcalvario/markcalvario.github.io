
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

 /** Sticky NavBar **/
       document.addEventListener("DOMContentLoaded", function(event) { 
       var navbar= document.getElementById("myTopnav")
       var sticky= navbar.offsetTop;

       function myFunction() {
           if (window.pageYOffset >= sticky) {
               navbar.classList.add("sticky")
           } else{
               navbar.classList.remove("sticky")
           }
       }
       window.onscroll= function () {myFunction()};
       });
       /** End of Sticky NavBar **/
       function myFunction() {
          var x = document.getElementById("myTopnav");
          if (x.className === "topnav") {
            x.className += " responsive";
          } else {
            x.className = "topnav";
          }
        }
