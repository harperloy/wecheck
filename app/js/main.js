$(function () {
  $(".slider__items").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    centerMode: true,
  });

  $('.rates__box-btn').on('click', function(e){
    e.preventDefault();
    $('.rates__box-btn').removeClass('rates__box-btn--active');
    $(this).addClass('rates__box-btn--active');
    $('.rates__items').removeClass('rates__items--active');
    $($(this).attr('href')).addClass('rates__items--active');
  });
});
