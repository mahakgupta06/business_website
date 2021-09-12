$(window).scroll(function () {
  $("nav").toggleClass("scrolled", $(this).scrollTop() > 200);
});
$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});
$(".owl-carousel").owlCarousel({
  merge: true,
  loop: true,
  margin: 10,
  video: true,
  center: true,
});
function videoslider(links) {
  document.querySelector(".slider-zippy").src = links;
}
