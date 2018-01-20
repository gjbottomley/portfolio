// Utils
import Waypoints from './utils/waypoints.js';
import slick from './utils/slick.min.js';

// Components
import toggles from './toggles.js';
import scrollto from './scrollto.js';
import global from './global.js';
import sliders from './sliders.js';

	var pink = '#f7658d',
			green = '#00ff80',
			ltBlue = '#318ae6',
			blue = '#161250';

	if( !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ) {
		skrollr.init();
	}

  // Once Javascript has been Initalized - RUN
  $('body').addClass('loaded');
  console.log('JS Bundled!');
