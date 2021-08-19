$(function () {

  $('.header__btn').on('click', () => {
    $('.rightside-menu').removeClass('rightside-menu--close');
  });
  $('.rightside-menu__close').on('click', () => {
    $('.rightside-menu').addClass('rightside-menu--close');
  });

  $('.top__slider').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true
  });

  var mixer = mixitup('.gallery__inner', {
    load: {
      filter: '.living'
    }
  });
})