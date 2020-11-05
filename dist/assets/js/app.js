$('.offer__close').click(() => {
  $('.offer').addClass('offer--hidden');
})
$('.search__button').click(() => {
  $('.search__button').addClass('search__button--hidden');
  $('.search-form').removeClass('search-form--hidden');
})
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
const cardWrapper = $('.cards-item__images');
cardWrapper.mousemove(function(e) {
  let pos = $(this).offset();
  let elem_left = pos.left;
  let X = e.pageX - elem_left;
  let cardWidth = cardWrapper.width();

  let cardItem = Array.from(e.currentTarget.children)

  cardItem.forEach(i => i.style.zIndex = 0);
  let cardWidthPart = cardWidth / cardItem.length;
  for (let i = 1; i < cardItem.length; i++) {
    if (X >= i * cardWidthPart && i < (i + 1) * cardWidthPart) {
      cardItem[i - 1].style.zIndex = 1;
    }
  }
});