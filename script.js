/** 
Switch background color to sticky nav on scroll 
**/
document.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  const text = document.querySelector(".la-mountains-text");
  if (window.scrollY > 0) {
    nav.classList.add("scrolled");
    text.classList.add("show-text");
  } else {
    nav.classList.remove("scrolled");
    text.classList.remove("show-text");
  }
});

/** 
Owl Carousel Navigation
**/
$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    items: 3,
    center: true,
  });
});
