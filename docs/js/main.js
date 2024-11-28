let slideIndex = [1, 1]; // Track slides for both carousels
let slideId = ["mySlides1", "mySlides2"]; // Class names for both slideshows

// Initialize both slideshows
showSlides(1, 0);
showSlides(1, 1);

// Function to handle next/prev buttons
function plusSlides(n, no) {
  showSlides((slideIndex[no] += n), no);
}

// Function to set the current slide based on dots
function currentSlide(n, no) {
  showSlides((slideIndex[no] = n), no);
}

// Core function to display the slide
function showSlides(n, no) {
  let i;
  let slides = document.getElementsByClassName(slideId[no]);
  let dots = document.querySelectorAll(`.${slideId[no]}-dots .dot`);

  // Wrap around slide index
  if (n > slides.length) slideIndex[no] = 1;
  if (n < 1) slideIndex[no] = slides.length;

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove active class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Show the current slide and activate the corresponding dot
  slides[slideIndex[no] - 1].style.display = "block";
  dots[slideIndex[no] - 1].className += " active";
}
