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
  margin: 20,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  nav:true,
  dots:false,
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
  margin: 0,
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
  autoplay: false,
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
  "/img/gallery1.jpeg",
  "/img/gallery2.jpeg",
];
var imageSources2 = [
  "/img/gallery3.jpeg",
  "/img/gallery4.jpeg",
];
var imageSources3 = [
  "/img/gallery5.jpeg",
  "/img/gallery6.jpeg",
];
var imageSources4 = [
  "/img/gallery7.jpeg",
  "/img/gallery8.jpeg",
];
var imageSources5 = [
  "/img/gallery9.jpeg",
  "/img/gallery10.jpeg",
];

var index = 2;
let set = setInterval(function () {
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

let time = setInterval(() => {
  document.getElementById("img-gallery1").style.opacity= "1"
}, 2000);

clearInterval(time)

// let time2 = setTimeout(() => {
//     document.getElementById("img-gallery1").style.opacity="1"
// }, 2000);



