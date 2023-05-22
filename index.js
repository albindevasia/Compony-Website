var slideIndex = 0;
showSlides();

function showSlides() {
  var slides = document.getElementsByClassName("slide");
  
  
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1; 
  }
  slides[slideIndex - 1].style.display = "block";
  
   setTimeout(showSlides, 3000);
}
var slideIndex = 0;
showSlides();



function plusSlides(n) {
  slideIndex += n;
  showSlides();
}


document.getElementById("prevBtn").addEventListener("click", function() {
  plusSlides(-1);
});


document.getElementById("nextBtn").addEventListener("click", function() {
  plusSlides(1);
});
function toggleDropdown(event, dropdownId) {
  event.preventDefault();
  var dropdown = document.getElementById(dropdownId);
  dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
}


