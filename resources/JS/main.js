$(document).ready(function(){
  $('.carousel').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });
});

var amountScrolled = 0;

$(window).scroll(function(){
  var $scrollTop = $(this).scrollTop();

  if (($scrollTop - amountScrolled) >= 50) {
    var $navbarHeight = $('.navbar').css('height');
    $('.navbar').animate({top: '-' + $navbarHeight}, 150);
    amountScrolled = $scrollTop;
  } else if ((amountScrolled - $scrollTop) >= 50) {
    $('.navbar').animate({top: 0}, 150);
    amountScrolled = $scrollTop;
  }
});
