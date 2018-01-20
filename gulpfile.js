// Include gulp
var gulp = require('gulp');

// Include Plugins
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');

// Include Icon Plugins
var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');
var runTimestamp = Math.round(Date.now()/1000);
var fontName = 'icon-family';


// --------------
// Default
// --------------
// Browser Sync - Refresh on update
gulp.task('browserSync', function() {
	browserSync.init({
		proxy: 'http://portfolio.george/',
        host: 'portfolio.george',
        open: 'external'
	})
})

// --------------
// Icons
// --------------
gulp.task('iconfont', function(){

  return gulp.src(['public/fonts/icons/*.svg'])
    .pipe(iconfontCss({
      fontName: fontName,
      path: 'public/css/sass/fonts/_icon-handler.scss',
      targetPath: '../css/sass/fonts/_icons.scss',
      fontPath: '../fonts/'
    }))
    .pipe(iconfont({
        fontName: fontName, // required
        prependUnicode: true, // recommended option
        formats: ['ttf', 'eot', 'woff', 'woff2', 'svg'],
        timestamp: runTimestamp, // recommended to get consistent builds when watching files
				normalize: true,
				fontHeight: 1001
     }))
     .pipe(gulp.dest('public/fonts/'))
});

// Compile Our Sass
gulp.task('sass', function() {

	return gulp.src('public/css/sass/**/*.scss')

	.pipe(sass({
		outputStyle: 'compressed'
	}).on('error', sass.logError))

	.pipe(autoprefixer({
		browsers: [
			'last 6 versions',
			'safari >= 5',
			'ie >= 8',
			'opera 12.1',
			'ios >= 6',
			'android >= 4',
			'firefox >= 20'
		]
	}))

	.pipe(gulp.dest('public/css/'))

	.pipe(browserSync.reload({
		stream: true
	}))
});

// Watch Files For Changes
gulp.task('watch', ['browserSync'], function() {
	gulp.watch('public/css/sass/**/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['watch']);
gulp.task('icons', ['iconfont', 'sass']);
