// Components
import toggles from './toggles.js';
import global from './global.js';
// import sliders from './sliders.js';

	if( !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ) {
		skrollr.init();
		console.log('skrollr Initalized');
	}

  // Once Javascript has been Initalized - RUN
  console.log('JS Bundled!');
