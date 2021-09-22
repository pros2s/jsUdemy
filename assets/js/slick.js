$(function () {
  const portfolio = $("#portfolio");

  portfolio.slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    dots: true,
    speed: 400
  });

  $('#portfolio-arrw-prev').on('click', function(e) {
    e.preventDefault();
    portfolio.slick('slickPrev');
  })

  $('#portfolio-arrw-next').on('click', function(e) {
    e.preventDefault();
    portfolio.slick('slickNext');
  })
});