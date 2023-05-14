// init Isotope
let $grid = $('.project-list').isotope({
  // options
});
// filter items on button click
$('.project-flitter').on( 'click', 'li', function() {
  let filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});