AOS.init();

$('.slider').slick({
    centerMode: true,
    centerPadding: '30px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          arrows: false,
          mobileFirst: true,
          centerMode: true,
          centerPadding: '30px',
          slidesToShow: 3
        }
      },
    ]
});
        
$('.header__burger-icon').click(function() {
  $('.burger-menu').slideToggle();
});