$(".slider__list").slick({
  dots: true,
});

$(".cards__list").slick({
  arrows: false,
  dots: false,
  slidesToShow: 5,
  slidesToScroll: 5,
  // variableWidth: false,
  responsive: [
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      // variableWidth: false,
    }
  },
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 4,
      // variableWidth: false,
      dots: true,
    }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]});
