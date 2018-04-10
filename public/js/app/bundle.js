/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!********************************!*\
  !*** ./public/js/app/index.js ***!
  \********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toggles_js__ = __webpack_require__(/*! ./toggles.js */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toggles_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__toggles_js__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_js__ = __webpack_require__(/*! ./global.js */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__global_js__);\n// Components\n\n\n// import sliders from './sliders.js';\n\n\tif( !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ) {\n\t\tskrollr.init();\n\t\tconsole.log('skrollr Initalized');\n\t}\n\n  // Once Javascript has been Initalized - RUN\n  console.log('JS Bundled!');\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3B1YmxpYy9qcy9hcHAvaW5kZXguanM/ZThiOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb21wb25lbnRzXG5pbXBvcnQgdG9nZ2xlcyBmcm9tICcuL3RvZ2dsZXMuanMnO1xuaW1wb3J0IGdsb2JhbCBmcm9tICcuL2dsb2JhbC5qcyc7XG4vLyBpbXBvcnQgc2xpZGVycyBmcm9tICcuL3NsaWRlcnMuanMnO1xuXG5cdGlmKCAhKC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkgKSB7XG5cdFx0c2tyb2xsci5pbml0KCk7XG5cdFx0Y29uc29sZS5sb2coJ3Nrcm9sbHIgSW5pdGFsaXplZCcpO1xuXHR9XG5cbiAgLy8gT25jZSBKYXZhc2NyaXB0IGhhcyBiZWVuIEluaXRhbGl6ZWQgLSBSVU5cbiAgY29uc29sZS5sb2coJ0pTIEJ1bmRsZWQhJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9qcy9hcHAvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!**********************************!*\
  !*** ./public/js/app/toggles.js ***!
  \**********************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("$('#js-wrapper').on('click', function (e) {\n\tvar element = $(e.target);\n\n\tif (element.hasClass('show')) {\n\t\telement.addClass('animate-close');\n\n\t\tsetTimeout(function(){\n\t\t\telement.removeClass('animate-close');\n\t\t\telement.removeClass('show');\n\t\t}, 1000);\n\t}\n\n\t$('.js-hamburger').removeClass('is-active');\n\t$('.js-navigation').removeClass('open');\n});\n\n/*****************************************************\n\tHamburger Click Function\n******************************************************/\n\nvar hamburgerToggle = function (element) {\n\tvar area = element.attr('data-toggle');\n\n\t$('#js-' + area).toggleClass('open');\n\t$('#js-wrapper').addClass('show');\n\t$('body').toggleClass('freeze');\n\n\telement.toggleClass('is-active');\n\n\tconsole.log('You\\'ve toggled the navigation');\n}\n\n\n$('.js-hamburger').on('click', function (e) {\n  var element = $(e.target);\n  var parent = element.parent();\n  var gparent = element.parent().parent();\n\n  if (parent.hasClass('js-hamburger')) {\n    element = parent;\n  }\n\n  if (gparent.hasClass('js-hamburger')) {\n    element = gparent;\n  }\n\n  hamburgerToggle(element);\n\n});\n\nvar LoadMore = function (element) {\n\tvar area = element.attr('data-toggle');\n\n\telement.fadeOut();\n\n\tsetTimeout(function(){\n\t\t$('#js-' + area).slideDown();\n\t}, 500);\n\n\tsetTimeout(function(){\n\t\t$('#js-' + area).addClass('visible');\n\t\ts.refresh();\n\t}, 700);\n}\n\n$('.js-loadmore').on('click', function (e) {\n  var element = $(e.target);\n  var parent = element.parent();\n  var gparent = element.parent().parent();\n\n  if (parent.hasClass('js-loadmore')) {\n    element = parent;\n  }\n\n  if (gparent.hasClass('js-loadmore')) {\n    element = gparent;\n  }\n\n  LoadMore(element);\n\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3B1YmxpYy9qcy9hcHAvdG9nZ2xlcy5qcz80OTJhIl0sInNvdXJjZXNDb250ZW50IjpbIiQoJyNqcy13cmFwcGVyJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcblx0dmFyIGVsZW1lbnQgPSAkKGUudGFyZ2V0KTtcblxuXHRpZiAoZWxlbWVudC5oYXNDbGFzcygnc2hvdycpKSB7XG5cdFx0ZWxlbWVudC5hZGRDbGFzcygnYW5pbWF0ZS1jbG9zZScpO1xuXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVDbGFzcygnYW5pbWF0ZS1jbG9zZScpO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVDbGFzcygnc2hvdycpO1xuXHRcdH0sIDEwMDApO1xuXHR9XG5cblx0JCgnLmpzLWhhbWJ1cmdlcicpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcblx0JCgnLmpzLW5hdmlnYXRpb24nKS5yZW1vdmVDbGFzcygnb3BlbicpO1xufSk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXHRIYW1idXJnZXIgQ2xpY2sgRnVuY3Rpb25cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxudmFyIGhhbWJ1cmdlclRvZ2dsZSA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG5cdHZhciBhcmVhID0gZWxlbWVudC5hdHRyKCdkYXRhLXRvZ2dsZScpO1xuXG5cdCQoJyNqcy0nICsgYXJlYSkudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcblx0JCgnI2pzLXdyYXBwZXInKS5hZGRDbGFzcygnc2hvdycpO1xuXHQkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ2ZyZWV6ZScpO1xuXG5cdGVsZW1lbnQudG9nZ2xlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuXG5cdGNvbnNvbGUubG9nKCdZb3VcXCd2ZSB0b2dnbGVkIHRoZSBuYXZpZ2F0aW9uJyk7XG59XG5cblxuJCgnLmpzLWhhbWJ1cmdlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gIHZhciBlbGVtZW50ID0gJChlLnRhcmdldCk7XG4gIHZhciBwYXJlbnQgPSBlbGVtZW50LnBhcmVudCgpO1xuICB2YXIgZ3BhcmVudCA9IGVsZW1lbnQucGFyZW50KCkucGFyZW50KCk7XG5cbiAgaWYgKHBhcmVudC5oYXNDbGFzcygnanMtaGFtYnVyZ2VyJykpIHtcbiAgICBlbGVtZW50ID0gcGFyZW50O1xuICB9XG5cbiAgaWYgKGdwYXJlbnQuaGFzQ2xhc3MoJ2pzLWhhbWJ1cmdlcicpKSB7XG4gICAgZWxlbWVudCA9IGdwYXJlbnQ7XG4gIH1cblxuICBoYW1idXJnZXJUb2dnbGUoZWxlbWVudCk7XG5cbn0pO1xuXG52YXIgTG9hZE1vcmUgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuXHR2YXIgYXJlYSA9IGVsZW1lbnQuYXR0cignZGF0YS10b2dnbGUnKTtcblxuXHRlbGVtZW50LmZhZGVPdXQoKTtcblxuXHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0JCgnI2pzLScgKyBhcmVhKS5zbGlkZURvd24oKTtcblx0fSwgNTAwKTtcblxuXHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0JCgnI2pzLScgKyBhcmVhKS5hZGRDbGFzcygndmlzaWJsZScpO1xuXHRcdHMucmVmcmVzaCgpO1xuXHR9LCA3MDApO1xufVxuXG4kKCcuanMtbG9hZG1vcmUnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICB2YXIgZWxlbWVudCA9ICQoZS50YXJnZXQpO1xuICB2YXIgcGFyZW50ID0gZWxlbWVudC5wYXJlbnQoKTtcbiAgdmFyIGdwYXJlbnQgPSBlbGVtZW50LnBhcmVudCgpLnBhcmVudCgpO1xuXG4gIGlmIChwYXJlbnQuaGFzQ2xhc3MoJ2pzLWxvYWRtb3JlJykpIHtcbiAgICBlbGVtZW50ID0gcGFyZW50O1xuICB9XG5cbiAgaWYgKGdwYXJlbnQuaGFzQ2xhc3MoJ2pzLWxvYWRtb3JlJykpIHtcbiAgICBlbGVtZW50ID0gZ3BhcmVudDtcbiAgfVxuXG4gIExvYWRNb3JlKGVsZW1lbnQpO1xuXG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2pzL2FwcC90b2dnbGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*********************************!*\
  !*** ./public/js/app/global.js ***!
  \*********************************/
/*! dynamic exports provided */
/***/ (function(module, __webpack_exports__) {

"use strict";
eval("$( document ).ready(function() {\n\n  if( !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ) {\n    skrollr.init();\n    console.log('skrollr Initalized');\n  }\n\n  // turns off scrollTop if website is scrolled\n  $(\"html, body\").bind(\"scroll mousedown DOMMouseScroll mousewheel\", function(){\n    $('html, body').stop();\n  });\n\n  // Banner height\n  var windowHeight = $(window).height();\n  $('#js-banner').css('height', windowHeight);\n\n  // IF homepage\n  if ( window.location.pathname === '/' ){\n\n    // if scroll past point append Class (changes hamburger color)\n    $(document).scroll(function() {\n      var hamburger = $('.js-hamburger');\n\n      if ($(document).scrollTop() >= windowHeight - 140) {\n        hamburger.addClass('body');\n      } else {\n        hamburger.removeClass('body');\n      }\n    }).scroll(); // initalise scroll on load\n  }\n\n  //Smooth scrolling with links\n  $('a[href*=\\\\#]').on('click', function(event){\n\n    if( $('.js-hamburger').hasClass('is-active') ){\n      $('.js-hamburger').trigger('click');\n    }\n      $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);\n  });\n\n  // Logo Gif intervals\n  var path = '/images/GB-Logo.gif';\n  $(\"#js-logo\").attr(\"src\", path);\n  window.setInterval(function(){\n    $(\"#js-logo\").attr(\"src\", path);\n  }, 15000);\n\n  // On Load\n  setTimeout(function(){\n    $('body').addClass('loaded');\n    $('#js-loader').fadeOut('slow');\n  }, 300);\n\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3B1YmxpYy9qcy9hcHAvZ2xvYmFsLmpzP2MwNmMiXSwic291cmNlc0NvbnRlbnQiOlsiJCggZG9jdW1lbnQgKS5yZWFkeShmdW5jdGlvbigpIHtcblxuICBpZiggISgvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpICkge1xuICAgIHNrcm9sbHIuaW5pdCgpO1xuICAgIGNvbnNvbGUubG9nKCdza3JvbGxyIEluaXRhbGl6ZWQnKTtcbiAgfVxuXG4gIC8vIHR1cm5zIG9mZiBzY3JvbGxUb3AgaWYgd2Vic2l0ZSBpcyBzY3JvbGxlZFxuICAkKFwiaHRtbCwgYm9keVwiKS5iaW5kKFwic2Nyb2xsIG1vdXNlZG93biBET01Nb3VzZVNjcm9sbCBtb3VzZXdoZWVsXCIsIGZ1bmN0aW9uKCl7XG4gICAgJCgnaHRtbCwgYm9keScpLnN0b3AoKTtcbiAgfSk7XG5cbiAgLy8gQmFubmVyIGhlaWdodFxuICB2YXIgd2luZG93SGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpO1xuICAkKCcjanMtYmFubmVyJykuY3NzKCdoZWlnaHQnLCB3aW5kb3dIZWlnaHQpO1xuXG4gIC8vIElGIGhvbWVwYWdlXG4gIGlmICggd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09PSAnLycgKXtcblxuICAgIC8vIGlmIHNjcm9sbCBwYXN0IHBvaW50IGFwcGVuZCBDbGFzcyAoY2hhbmdlcyBoYW1idXJnZXIgY29sb3IpXG4gICAgJChkb2N1bWVudCkuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGhhbWJ1cmdlciA9ICQoJy5qcy1oYW1idXJnZXInKTtcblxuICAgICAgaWYgKCQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpID49IHdpbmRvd0hlaWdodCAtIDE0MCkge1xuICAgICAgICBoYW1idXJnZXIuYWRkQ2xhc3MoJ2JvZHknKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhhbWJ1cmdlci5yZW1vdmVDbGFzcygnYm9keScpO1xuICAgICAgfVxuICAgIH0pLnNjcm9sbCgpOyAvLyBpbml0YWxpc2Ugc2Nyb2xsIG9uIGxvYWRcbiAgfVxuXG4gIC8vU21vb3RoIHNjcm9sbGluZyB3aXRoIGxpbmtzXG4gICQoJ2FbaHJlZio9XFxcXCNdJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpe1xuXG4gICAgaWYoICQoJy5qcy1oYW1idXJnZXInKS5oYXNDbGFzcygnaXMtYWN0aXZlJykgKXtcbiAgICAgICQoJy5qcy1oYW1idXJnZXInKS50cmlnZ2VyKCdjbGljaycpO1xuICAgIH1cbiAgICAgICQoJ2h0bWwsYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcDokKHRoaXMuaGFzaCkub2Zmc2V0KCkudG9wfSwgNTAwKTtcbiAgfSk7XG5cbiAgLy8gTG9nbyBHaWYgaW50ZXJ2YWxzXG4gIHZhciBwYXRoID0gJy9pbWFnZXMvR0ItTG9nby5naWYnO1xuICAkKFwiI2pzLWxvZ29cIikuYXR0cihcInNyY1wiLCBwYXRoKTtcbiAgd2luZG93LnNldEludGVydmFsKGZ1bmN0aW9uKCl7XG4gICAgJChcIiNqcy1sb2dvXCIpLmF0dHIoXCJzcmNcIiwgcGF0aCk7XG4gIH0sIDE1MDAwKTtcblxuICAvLyBPbiBMb2FkXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2xvYWRlZCcpO1xuICAgICQoJyNqcy1sb2FkZXInKS5mYWRlT3V0KCdzbG93Jyk7XG4gIH0sIDMwMCk7XG5cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvanMvYXBwL2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);