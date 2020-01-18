document.addEventListener("DOMContentLoaded", function(event) { 
	var navbar= document.getElementById("navbar")
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

