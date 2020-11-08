$('.feetback__row').slick({
  slidesToShow: 4, //сколько слайдов показывать в карусели
  slidesToScroll: 1, // сколько слайдов прокручивать за раз
  autoplay: true,
  responsive: [
    {
      breakpoint: 1350,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
})

$(document).ready(function(){
  /**
   * При прокрутке страницы, показываем или срываем кнопку
   */
  $(window).scroll(function () {
      // Если отступ сверху больше 50px то показываем кнопку "Наверх"
      if ($(this).scrollTop() > 100) {
          $('#button-up').fadeIn();
      } else {
          $('#button-up').fadeOut();
      }
  });
  
  /** При нажатии на кнопку мы перемещаемся к началу страницы */
  $('#button-up').click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 500);
      return false;
  });
  
});