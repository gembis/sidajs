"use strict"



var imageCounter = 1;

showDiv(imageCounter);

function changeImage(m) {

    showDiv(imageCounter = imageCounter + m)

}

function showDiv(n) {

    var i;

    var imageArray = document.getElementsByClassName("mySlides");

    if (n > imageArray.length) {

        imageCounter = 1;

    }

    if (n < 1) {

        imageCounter = imageArray.length;

    } 

    for (i = 0; i < imageArray.length; i++) {

        imageArray[i].style.display = "none";

    }

    imageArray[imageCounter - 1].style.display = "block";

}



var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
