$(function () {
  $('.main-carousel').flickity({
    // options
    wrapAround: true,
    autoPlay: true,
    prevNextButtons: false,
    cellAlign: 'left',
    contain: true
  });

  //email handler
  $('#email-subscribe').on('click', function (e) {
    e.preventDefault();
    //reg exp from http://regexlib.com/REDetails.aspx?regexp_id=26
    var regExpEmail = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (regExpEmail.test($('#email-input').val())) {
      $('#email-input').val("").attr("placeholder", "Thank you for subcribing!");
      alert('Thank you for subscribing!');
    } else {
      $('#email-input').val("").attr("placeholder", "Invalid Address");
      alert('Please enter valid email address');
    }
    $('#email-input').on('focus', function (event) {
      event.preventDefault();
      $('this').val('').attr('placeholder', 'Your Email');
    });
  });

  //smooth scrolling with the help of https://css-tricks.com/snippets/jquery/smooth-scrolling/
  $('a[href*="#"]').not('a[href="#"]').on('click', function (event) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top - $('header').outerHeight()
      }, 1000, function () {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        }
      });
    }
  });
});