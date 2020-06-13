var i = 0;
var txt = "print ('Welcome to my computer science portfolio page!')";
var speed = 70;

function typeWriter() {
if (i < txt.length) {
  document.getElementById("demo").innerHTML += txt.charAt(i);
  i++;
  setTimeout(typeWriter, speed);
  }
}
       




const userId= document.getElementById('userId');
const firstName= document.getElementById('firstName');
const lastName= document.getElementById('lastName');
const email= document.getElementById('email');
const submitBtn= document.getElementById('submitBtn');



function showInput(){
  document.getElementById('welcomeName').innerHTML= `Welcome ${firstName.value} ${lastName.value}`;
  document.getElementById('welcomeUser').innerHTML= `Welcome ${userId.value}!`;
  document.getElementById('showEmail').innerHTML= `Is ${email.value} your correct email address?`;
}



const database= firebase.database();

submitBtn.addEventListener('click', (e)=>{
  e.preventDefault();
  database.ref('/users/'+userId.value).set({
    first_name: firstName.value,
    last_name: lastName.value,
    email: email.value,
  })
});







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



