"use strict";

const hamburger = document.querySelector(".hamburger-menu");

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowWidth = window.innerHeight;
    var elementLeft = reveals[i].getBoundingClientRect().top;
    var elementVisible = 70;
    if (elementLeft < windowWidth - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

const urls = ["bg_1.jpg", "bg_2-smaller.jpg", "bg_3_rotated.jpg"];

function bgSwap() {
  let randomUrl = Math.floor(Math.random() * urls.length);
  console.log(randomUrl);
  document.body.style.backgroundImage = "url(" + "img/" + urls[randomUrl] + ")";
}

// To check the scroll position on page load
reveal();
bgSwap();
