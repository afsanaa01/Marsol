$(window).scroll(function () {
  updateNav();
});

function updateNav() {
  if ($(window).scrollTop() > 30) {
    $(".navbar").addClass("scrolled");
  } else {
    $(".navbar").removeClass("scrolled");
  }
}

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:30,
  nav:true,
  dots:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:3
      }
  }
})
var swiper = new Swiper(".firstSwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    // dynamicBullets: true,
  },
});

var swiper1 = new Swiper(".secondSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper2 = new Swiper(".thirdSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
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