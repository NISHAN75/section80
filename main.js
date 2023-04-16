jQuery(".project-list").isotope();
// click funtion
$(".project-tile li").on('click', function(){  
    $(".project-tile li").removeClass("active");
    $(this).addClass("active");
    let selector = $(this).attr('data-filter');
    $(".project-list").isotope({
        filter: selector
        
    });
});
