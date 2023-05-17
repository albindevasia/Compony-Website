var slideIndex = 0;
showSlides();

function showSlides() {
  var slides = document.getElementsByClassName("slide");
  
  // Hide all slides
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // Show the next slide
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1; // Start from the first slide
  }
  slides[slideIndex - 1].style.display = "block";
  
  // Change slide every 3 seconds
  setTimeout(showSlides, 5000);
}
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
  
  // Change slide every 3 seconds
  setTimeout(showSlides, 5000);
}

// Navigation controls
function plusSlides(n) {
  slideIndex += n;
  showSlides();
}

// Previous button
document.getElementById("prevBtn").addEventListener("click", function() {
  plusSlides(-1);
});

// Next button
document.getElementById("nextBtn").addEventListener("click", function() {
  plusSlides(1);
});
function toggleDropdown(event, dropdownId) {
  event.preventDefault();
  var dropdown = document.getElementById(dropdownId);
  dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
}
// Smooth scrolling to the target element
function smoothScroll(target) {
  const targetElement = document.querySelector(target);
  window.scrollTo({
    top: targetElement.offsetTop,
    behavior: 'smooth'
  });
}

// Attach event listener to the contact link
const contactLink = document.querySelector('nav a[href="#contact"]');
contactLink.addEventListener('click', e => {
  e.preventDefault();
  const target = contactLink.getAttribute('href');
  smoothScroll(target);
});
