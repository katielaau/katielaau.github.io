$(document).ready(function() {

  $('#carousel-next').click(function() {
    var currMargin = $('#carousel')[0].style.marginLeft;
    console.log(currMargin);
    if (currMargin == "-200%") {
      return false;
    } else if (currMargin == "-100%") {
      $('#carousel').css({'margin-left' : "-200%"});
    } else {
      $('#carousel').css({'margin-left' : "-100%"});
    }
  });

  $('#carousel-prev').click(function() {
    var currMargin = $('#carousel')[0].style.marginLeft;
    if (currMargin == "0%") {
      return false;
    } else if (currMargin == "-100%") {
      $('#carousel').css({'margin-left' : "0%"});
    } else {
      $('#carousel').css({'margin-left' : "-100%"});
    }
  });

  $('#lets-drink').click(function() {
    $('#carousel').css({'margin-left' : "-200%"});
  });

  $('#about-button').click(function() {
    $('#carousel').css({'margin-left' : "-100%"});
    console.log($('#carousel')[0].style.marginLeft);
  });

  $('#boba-pic').click(function() {
    $('#carousel').css({'margin-left' : "0%"});
  });

  $('#bobaguys').click(function() {
    $('#bobaguys-container').addClass('bobaguys-active');
  });

});