import $ from 'jquery';

var s = skrollr.init();

$('#js-wrapper').on('click', function (e) {
	var element = $(e.target);

	if (element.hasClass('show')) {
		element.addClass('animate-close');

		setTimeout(function(){
			element.removeClass('animate-close');
			element.removeClass('show');
		}, 1000);
	}

	$('.js-hamburger').removeClass('is-active');
	$('.js-navigation').removeClass('open');
});

/*****************************************************
	Hamburger Click Function
******************************************************/

var hamburgerToggle = function (element) {
	var area = element.attr('data-toggle');

	$('#js-' + area).toggleClass('open');
	$('#js-wrapper').addClass('show');
	$('body').toggleClass('freeze');

	element.toggleClass('is-active');

	console.log('You\'ve toggled the navigation');
}


$('.js-hamburger').on('click', function (e) {
  var element = $(e.target);
  var parent = element.parent();
  var gparent = element.parent().parent();

  if (parent.hasClass('js-hamburger')) {
    element = parent;
  }

  if (gparent.hasClass('js-hamburger')) {
    element = gparent;
  }

  hamburgerToggle(element);

});

var LoadMore = function (element) {
	var area = element.attr('data-toggle');

	element.fadeOut();

	setTimeout(function(){
		$('#js-' + area).slideDown();
	}, 500);

	setTimeout(function(){
		$('#js-' + area).addClass('visible');
		s.refresh();
	}, 700);
}

$('.js-loadmore').on('click', function (e) {
  var element = $(e.target);
  var parent = element.parent();
  var gparent = element.parent().parent();

  if (parent.hasClass('js-loadmore')) {
    element = parent;
  }

  if (gparent.hasClass('js-loadmore')) {
    element = gparent;
  }

  LoadMore(element);

});
