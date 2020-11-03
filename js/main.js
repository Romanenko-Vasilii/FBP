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
