// Components
import toggles from './toggles.js';
import global from './global.js';
// import sliders from './sliders.js';

	var pink = '#f7658d',
			green = '#00ff80',
			ltBlue = '#318ae6',
			blue = '#161250';

	if( !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ) {
		skrollr.init();
	}

  // Once Javascript has been Initalized - RUN
  console.log('JS Bundled!');
