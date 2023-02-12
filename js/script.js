$(document).ready(function () {
  //loader
  setTimeout(function () {
    $(".loader").fadeOut(1000);
  }, 2000);

  $(".customer .owl-carousel").owlCarousel({
    loop: true,
    nav: true,
    rtl: true,
    margin: 10,
    responsive: {
      0: {
        items: 1,
      },
      1000: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });
  $(".partners .owl-carousel").owlCarousel({
    loop: true,
    nav: true,
    rtl: true,
    margin: 10,
    items: 6,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      900: {
        items: 4,
      },
      1000: {
        items: 6,
      },
    },
  });
  $(".offers-finall .owl-carousel").owlCarousel({
    loop: true,
    margin: 5,
    nav: false,
    rtl: true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1.5,
      },
      600: {
        items: 2.2,
      },
      800: {
        items: 3,
      },

      1000: {
        items: 3.4,
      },
      1100: {
        items: 3.9,
      },

      1200: {
        items: 4.5,
      },
    },
  });
  // search sub menu
  $(".top-nav-search .open-search").click(function (event) {
    event.stopPropagation();
    $(".top-nav-search form").toggleClass("show");
    $(".top-nav-search input").focus();
  });

  $("body").click(function (e) {
    let input = document.querySelector(".top-nav-search input");
    if (e.target === input) {
      $(".top-nav-search form").addClass("show");
      $(".top-nav-search input").focus();
    } else {
      $(".top-nav-search form").removeClass("show");
    }
  });

  $(function () {
    $(".user-rate").rateYo({
      rating: $(".user-rate").attr("rateYo"),
      starWidth: "15px",
      ratedFill: "#FFC107",
      readOnly: true,
      normalFill: "#FFC107",
      rtl: true,
    });
  });
  $(".blog .card").hover(function () {
    $(this).find(".card-comm").stop().animate(
      {
        height: "toggle",
        opacity: "toggle",
      },
      100
    );
  });
  AOS.init();
});
