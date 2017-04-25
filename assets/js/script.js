$(document).ready(function() {

  $('#title').hide();
  $('#subtitle').hide();
  $('#title').fadeIn(800);
  $('#subtitle').fadeIn(800);
  // $('.bobaguys-container').hide();
  // $('.coming-soon-container').hide();

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
    if ($('.bobaguys-container').hasClass('bobaguys-active')) {
      $('.bobaguys-container').removeClass('bobaguys-active');
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
    if ($('.bobaguys-container').hasClass('bobaguys-active')) {
      $('.bobaguys-container').removeClass('bobaguys-active');
    }
  });

  $('#lets-drink').click(function() {
    $('#carousel').css({'margin-left' : "-200%"});
    if ($('.bobaguys-container').hasClass('bobaguys-active')) {
      $('.bobaguys-container').removeClass('bobaguys-active');
    }
  });

  $('#about-button').click(function() {
    $('#carousel').css({'margin-left' : "-100%"});
    if ($('.bobaguys-container').hasClass('bobaguys-active')) {
      $('.bobaguys-container').removeClass('bobaguys-active');
    }
  });

  $('#boba-pic').click(function() {
    $('#carousel').css({'margin-left' : "0%"});
    if ($('.bobaguys-container').hasClass('bobaguys-active')) {
      $('.bobaguys-container').removeClass('bobaguys-active');
    }
  });

  $('#bobaguys').click(function() {
    if ($('.bobaguys-container').hasClass('bobaguys-active')) {
      $('.bobaguys-container').removeClass('bobaguys-active');
    } else if ($('.coming-soon-container').hasClass('coming-soon-active')) {
      $('.coming-soon-container').removeClass('coming-soon-active');
      $('.bobaguys-container').addClass('bobaguys-active');
    } else {
      $('.bobaguys-container').addClass('bobaguys-active');
    }
  });

  $('#coolteabar').click(function() {
    if ($('.bobaguys-container').hasClass('bobaguys-active')) {
      $('.bobaguys-container').removeClass('bobaguys-active');
      $('.coming-soon-container').addClass('coming-soon-active');
    }  else {
      $('.coming-soon-container').addClass('coming-soon-active');
    }
  });

  $('#wonderfuls').click(function() {
    if ($('.bobaguys-container').hasClass('bobaguys-active')) {
      $('.bobaguys-container').removeClass('bobaguys-active');
      $('.coming-soon-container').addClass('coming-soon-active');
    } else {
      $('.coming-soon-container').addClass('coming-soon-active');
    }
  });

  $('#tfm').click(function() {
    if ($('.bobaguys-container').hasClass('bobaguys-active')) {
      $('.bobaguys-container').removeClass('bobaguys-active');
      $('.coming-soon-container').addClass('coming-soon-active');
    } else {
      $('.coming-soon-container').addClass('coming-soon-active');
    }
  });

  $('#pekoe').click(function() {
    if ($('.bobaguys-container').hasClass('bobaguys-active')) {
      $('.bobaguys-container').removeClass('bobaguys-active');
      $('.coming-soon-container').addClass('coming-soon-active');
    } else {
      $('.coming-soon-container').addClass('coming-soon-active');
    }
  });

  $('#gongcha').click(function() {
    if ($('.bobaguys-container').hasClass('bobaguys-active')) {
      $('.bobaguys-container').removeClass('bobaguys-active');
      $('.coming-soon-container').addClass('coming-soon-active');
    } else {
      $('.coming-soon-container').addClass('coming-soon-active');
    }
  });

  $('.coming-soon-container').click(function() {
    if ($('.coming-soon-container').hasClass('coming-soon-active')) {
      $('.coming-soon-container').removeClass('coming-soon-active');
    }
  });

});