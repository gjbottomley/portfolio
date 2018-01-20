import $ from 'jquery';

// turns off scrollTop if website is scrolled
$("html, body").bind("scroll mousedown DOMMouseScroll mousewheel", function(){
  $('html, body').stop();
});

$(".form").submit(function(e) {
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
      console.log('Form Has been submitted');
    }
  });

  e.preventDefault(); // avoid to execute the actual submit of the form.

});
