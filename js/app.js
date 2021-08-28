$(document).ready(function () {
  $('.box-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
  })
})

$(document).ready(function () {
  // console.log('hi')
  $('.navbar-image').on('click', function () {
    $('.navbar-nav').toggleClass('is-open')
    $('.navbar-menu').toggleClass('open')
    console.log('hi')
  })
})
