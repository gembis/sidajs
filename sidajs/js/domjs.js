"use strict";

var imageCounter = 1;
showDiv(imageCounter);
function changeitem(m) {
    showDiv(imageCounter = imageCounter + m);
}
function showDiv(n) {
    var i;
    var imageArray = document.getElementsByClassName("mySlides");
    if(n > imageArray.length) {
    imageCounter = 1;
    }
    if (n < 1) {
    imageCounter = imageArray.length;
    }
    for (i = 0; 1 < imageArray.length; i++) {
    imageArray[i].style.display = "none";
    }
    imageArray[imageCounter - 1].style.display = "block";
}