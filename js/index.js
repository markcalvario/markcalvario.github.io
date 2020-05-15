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