import $ from 'jquery';

/*****************************************************
	Scroll to
******************************************************/

var ScrollOn = false
var scollTo = function (element) {

	var area = element.attr('data-scroll'),
		headerHeight = $('#js-header').height(),
		offset;


	if (typeof (area) === 'undefined') {
		//return false;
	}

	offset = $('#js-' + area).offset().top - headerHeight;

	// IF document top is not equal to the area offset then animate scroll
	if ($(document).scrollTop() != offset) {
		$('html, body').animate({
			scrollTop: offset
		}, 'slow');
	}
}


$('.js-scroll').on('click', function (e) {
	var ScrollOn = true;
	var element = $(e.target);
	var parent = element.parent();
	var gparent = element.parent().parent();

	if (parent.hasClass('js-scroll')) {
		element = parent;
	}

	if (gparent.hasClass('js-scroll')) {
		element = gparent;
	}

	setTimeout(function(){
		scollTo(element);
	}, 400);
});
