$(window).scroll(function () {
  updateNav();
});

function updateNav() {
  if ($(window).scrollTop() > 20) {
    $(".navbar").addClass("scrolled");
  } else {
    $(".navbar").removeClass("scrolled");
  }
}
function myFunction(x) {
  x.classList.toggle("change");
}
$(".owl-carousel1").owlCarousel({
  items: 3,
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 3,
    },
  },
});

$(".owl-carousel2").owlCarousel({
  items: 1,
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 30,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 3,
    },
  },
});


var imageSources1 = [
  "https://www.w3schools.com/css/img_fjords.jpg",
  "https://www.w3schools.com/howto/img_mountains.jpg",
];
var imageSources2 = [
  "https://www.w3schools.com/css/img_fjords.jpg",
  "https://www.w3schools.com/howto/img_mountains.jpg",
];
var imageSources3 = [
  "https://www.w3schools.com/css/img_fjords.jpg",
  "https://www.w3schools.com/howto/img_mountains.jpg",
];
var imageSources4 = [
  "https://www.w3schools.com/css/img_fjords.jpg",
  "https://www.w3schools.com/howto/img_mountains.jpg",
];
var imageSources5 = [
  "https://www.w3schools.com/css/img_fjords.jpg",
  "https://www.w3schools.com/howto/img_mountains.jpg",
];

var index = 0;
setInterval(function () {
  if (index === imageSources1.length) {
    index = 0;
  }
  document.getElementById("img-gallery1").src = imageSources1[index];
  document.getElementById("img-gallery2").src = imageSources2[index];
  document.getElementById("img-gallery3").src = imageSources3[index];
  document.getElementById("img-gallery4").src = imageSources4[index];
  document.getElementById("img-gallery5").src = imageSources5[index];
  index++;
}, 1500);
