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

$(".slider")
       .on("initialized.owl.carousel changed.owl.carousel", function (e) {
           if (!e.namespace) {
           return;
           }
           var carousel = e.relatedTarget;
           $(".slider-counter").text(
            carousel.relative(carousel.current()) + 1 + " - " + carousel.items().length
       );
   })
   .owlCarousel({
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