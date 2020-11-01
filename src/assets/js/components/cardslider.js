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