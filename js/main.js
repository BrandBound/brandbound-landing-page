$(document).ready(function () {

  $(window).scroll(function(){
    var top=$(window).scrollTop();
    if (top>2360) {
      $('#header').css('background-color','#d3d3d3');
    } else {
      $('#header').css('background-color','Transparent');
    }
  });

  $('#transitionbutton').click(function () {
    $('html, body').animate({
        scrollTop: $(document).height()
    }, 'slow');
    return false;
  });

  $("#godown").click(function() {
    $('html, body').animate({
        scrollTop: $("#aboutus").offset().top
    }, 500);
  });

});
