$(document).ready(function () {
  $("#Pankaj_1 .owl-carousel").owlCarousel({
    items: 5, // This Is The Number of Items You Want To show
    margin: 20, // This Is The Gap Which You Want To Shows
    loop: true, // Behaves As A Loop As The Default is False We Need To Change
    nav: true, // It Will Show THe arrows
    autoplay: true, // Playing The Carousel Automatically
    autoplayTimeout: 2000, // At What Time You Need The Carousel To scroll Automatically

    // This Is For The Animation Only Occurs For Single Data
    animateOut: "fadeIn",
    animateIn: "rotateIn",
    rtl: true, // It Will Make The Carousel Slide from Right To left In reverse Order

    responsive: {
      0: {
        items: 1,
        nav: false,
        margin: 0,
        dots: false,
      },
      600: {
        items: 3,
        nav: false,
        margin: 5,
      },
      1000: {
        items: 3,
        nav: false,
        // stagePadding: 100, // It will Show The Cut Out Part From The Both The Sides Of The Carousel
      },
    },
  });
});

$(document).ready(function () {
  $("#Pankaj_2 .owl-carousel").owlCarousel({
    items: 5, // This Is The Number of Items You Want To show
    margin: 20, // This Is The Gap Which You Want To Shows
    loop: true, // Behaves As A Loop As The Default is False We Need To Change
    nav: true, // It Will Show THe arrows
    autoplay: true, // Playing The Carousel Automatically
    autoplayTimeout: 3000, // At What Time You Need The Carousel To scroll Automatically

    // This Is For The Animation Only Occurs For Single Data
    animateOut: "fadeIn",
    animateIn: "rotateIn",
    rtl: false, // It Will Make The Carousel Slide from Right To left In reverse Order

    responsive: {
      0: {
        items: 1,
        nav: false,
        margin: 0,
        dots: false,
      },
      600: {
        items: 3,
        nav: false,
        margin: 5,
      },
      1000: {
        items: 6,
        nav: false,
        // stagePadding: 100, // It will Show The Cut Out Part From The Both The Sides Of The Carousel
      },
    },
  });
});
