$( document ).ready(function() {

  if( !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ) {
    skrollr.init();
    console.log('skrollr Initalized');
  }

  // turns off scrollTop if website is scrolled
  $("html, body").bind("scroll mousedown DOMMouseScroll mousewheel", function(){
    $('html, body').stop();
  });

  // Banner height
  var windowHeight = $(window).height();
  $('#js-banner').css('height', windowHeight);

  // IF homepage
  if ( window.location.pathname === '/' ){

    // if scroll past point append Class (changes hamburger color)
    $(document).scroll(function() {
      var hamburger = $('.js-hamburger');

      if ($(document).scrollTop() >= windowHeight - 140) {
        hamburger.addClass('body');
      } else {
        hamburger.removeClass('body');
      }
    }).scroll(); // initalise scroll on load
  }

  //Smooth scrolling with links
  $('a[href*=\\#]').on('click', function(event){

    if( $('.js-hamburger').hasClass('is-active') ){
      $('.js-hamburger').trigger('click');
    }
      $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
  });

  // Logo Gif intervals
  var path = '/images/gb.gif';
  setTimeout(function(){
    $("#js-logo").attr("src", path);
  }, 900);

  // On Load
  setTimeout(function(){
    $('body').addClass('loaded');
    $('#js-loader').fadeOut('slow');
  }, 300);

});

// Ajax Form submition
$("#js-form").submit(function(e) {
  var element = $(e.target),
      formSuccess = $('#js-form-success'),
      formWrapper = $('#js-form-wrapper'),
      formHeight = $('#js-form-wrapper').outerHeight(),
      url = "/"; // the script where you handle the form input.

  formWrapper.css('height', formHeight);
  element.addClass('loading');

  $.ajax({
    type: "POST",
    url: url,
    data: $("form").serialize(), // serializes the form's elements.
    success: function(data)
    {
      element.hide();
      formSuccess.show();
    }
  });

  e.preventDefault(); // avoid to execute the actual submit of the form.
});
