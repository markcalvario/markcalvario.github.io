//************** For Opening Information Tab **************//
// Get the button that opens the modal
var btn = document.querySelectorAll("img.myBtn");

// All page modals
var modals = document.querySelectorAll('.modal');

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
for (var j = 0; j < btn.length; j++) {
 btn[j].onclick = function(e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
 }
}

// When the user clicks on <span> (x), close the modal
for (var j = 0; j < spans.length; j++) {
 spans[j].onclick = function() {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
    }
 }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
     for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
     }
    }
}


function changeImage(id,image,oldClassName,newClassName){
  var beehive1= document.getElementById(id);
  beehive1.src='image';
  if (window.matchMedia("(min-width: 375px) and (max-width: 767px)").matches){
    document.getElementById(id).classList.remove(oldClassName);
    document.getElementById(id).classList.add(newClassName);
  }else{
    document.getElementById(id).classList.remove(newClassName);
    document.getElementById(id).classList.add(oldClassName);
  }
  return false;
  
}