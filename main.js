$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items:3,
    dots:true,
    nav:true,
    autoplay:false,
    animateOut: 'fadeOut',
    navText:['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
    loop:true,
    margin:30
  });
});
// $('#myTabs a').click(function (e) {
//   e.preventDefault()
//   $(this).tab('show')
// })