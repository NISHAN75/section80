$('#clock').countdown('2023/10/10', function(event) {
  $(this).html(event.strftime('<sapn class="countdown-wrap"> <span class="single-countdown-item">%w </br> <span>weeks</span></span></sapn> <sapn class="countdown-wrap"> <span class="single-countdown-item">%D </br> <span>days</span></span></sapn> <sapn class="countdown-wrap"> <span class="single-countdown-item">%H </br> <span>Hours</span></span></sapn> <sapn class="countdown-wrap"> <span class="single-countdown-item">%M </br> <span>Minutes</span></span></sapn> <sapn class="countdown-wrap"> <span class="single-countdown-item">%S </br> <span>seconds</span></span></sapn>'));
});
$(document).ready(function(){
  $('#bar1').barfiller({
    barColor:'#fff',
    duration: 2000
  });
  $('#bar2').barfiller({
    barColor:'#fff',
    duration: 3000
  });
  $('#bar3').barfiller({
    barColor:'#fff',
    duration: 5000
  });
  $('#bar4').barfiller({
    barColor:'#fff',
    duration:6000
  });
});