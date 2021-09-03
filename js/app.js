$(document).ready(function (e) {
  //slider
  $('.box-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
  })
  //navbar
  $('.navbar-image').on('click', function () {
    $('.navbar-nav').toggleClass('is-open')
    $('.navbar-menu').toggleClass('open')
    e.stopPropagation()
    e.preventDefault()
    console.log('hi')
  })
})
