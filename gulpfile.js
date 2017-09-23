/**
 * Project: Elodin
 * Author: Shermam Xavier Miranda
 * email: shermam.miranda@hotmail.com 
 */

var module = 'elodin';
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var srcmaps = require('gulp-sourcemaps');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var strip = require('gulp-strip-comments');
var templateCache = require('gulp-angular-templatecache');
var inject = require('gulp-inject');
var clean = require('gulp-clean');
var imageResize = require('gulp-image-resize');

/**
 * Task to clean the destination folder
 */
gulp.task('clean', function () {
	//return gulp.src('public', { read: false })
	//	.pipe(clean({ force: true }));
});


/**
 * Default Task
 *
 * This task will build the application and start the local 
 * webserver when the gulp command is executed on the
 * command line in the app root directory
 */
gulp.task('default', [
	'build'
]);


/**
 * Build Task
 *
 * This task will start all the other build tasks in sequence
 */
gulp.task('build', [
	'build-index',
	'build-css',
	'build-libs-css',
	'build-libs-js',
	'build-js',
	'build-templates',
	'move-img',
	'move-fonts',
	'move-manifest',
	'resize'
]);

/**
 * Build Task
 *
 * This task will start all the other build tasks in sequence
 */
gulp.task('build-dev', [
	'build-css',
	'build-libs-css',
	'build-libs-js-dev',
	'build-js-dev',
	'build-templates',
	'move-img',
	'move-fonts',
	'move-manifest',
	'move-js-dev',
	'resize'
]);

/**
 * Build Inex.html task
 *
 * Minifies the HTML and copies it to the mobile folder.
 */
gulp.task('build-index', ['clean'], function () {

	//Sets the 'src/index.html' as the file to be minified
	return gulp.src('src/index.html')

		//Remove comments from the file
		.pipe(strip())

		//Minifies the file
		.pipe(htmlmin({ collapseWhitespace: true }))

		//Sends it to the public folder 
		.pipe(gulp.dest('public'));
});

/**
 * Build CSS task
 *
 * Minifies the CSS file
 */
gulp.task('build-css', ['clean'], function () {

	//Sets the 'src/index.html' as the file to be minified
	return gulp.src('./src/css/*.css')

		//Starts the creation of the maps file
		.pipe(srcmaps.init())

		//Concatenates all files in the files array into a main.css file
		.pipe(concat('main.css'))

		//Minifies the CSS File
		.pipe(cleanCSS())

		//Ends the creation of the maps file	
		.pipe(srcmaps.write('.'))

		//Sends it to the public folder 
		.pipe(gulp.dest('public/css'));

});

/**
 * Build Libs CSS task
 *
 * Concatenates and moves the CSS Libraries to the mobile folder
 */
gulp.task('build-libs-css', ['clean'], function () {

	//CSS Libraries to be concatenated
	var files = [
		"./node_modules/angular-material/angular-material.min.css",
		"./node_modules/angular-ui-carousel/dist/ui-carousel.min.css",
		"./node_modules/animate.css/animate.min.css",
		"./node_modules/angular-material-data-table/dist/md-data-table.min.css"
	];

	return gulp.src(files)

		//Starts the creation of the maps file
		.pipe(srcmaps.init())

		//Concatenates all files in the files array into a lib.css file
		.pipe(concat('lib.css'))

		//Ends the creation of the maps file
		.pipe(srcmaps.write('.'))

		//Sends it to the public folder 
		.pipe(gulp.dest('public/css'));
});

/**
 * Build Libs JS task
 *
 * Concatenates and moves the JS Libraries to the mobile folder
 */
gulp.task('build-libs-js', ['clean'], function () {

	//JS Libraries to be concatenated
	var libs = [
		"./node_modules/angular/angular.min.js",
		"./node_modules/angular-animate/angular-animate.min.js",
		"./node_modules/angular-aria/angular-aria.min.js",
		"./node_modules/angular-messages/angular-messages.min.js",
		"./node_modules/angular-ui-router/release/angular-ui-router.min.js",
		"./node_modules/angular-material/angular-material.min.js",
		"./node_modules/angular-ui-carousel/dist/ui-carousel.min.js",
		"./node_modules/angularfire/dist/angularfire.min.js",
		"./node_modules/angular-material-data-table/dist/md-data-table.min.js"
	];

	return gulp.src(libs)

		//Starts the creation of the maps file
		.pipe(srcmaps.init())

		//Concatenates all files in the files array into a lib.css file
		.pipe(concat('lib.js'))

		//Ends the creation of the maps file
		.pipe(srcmaps.write('.'))

		//Sends it to the public folder 
		.pipe(gulp.dest('public/js'));
});

/**
 * Build Libs JS task
 *
 * Concatenates and moves the NON MINIFIED JS Libraries to the mobile folder
 */
gulp.task('build-libs-js-dev', ['clean'], function () {

	//JS Libraries to be concatenated
	var libs = [
		"./node_modules/angular/angular.js",
		"./node_modules/angular-animate/angular-animate.js",
		"./node_modules/angular-aria/angular-aria.js",
		"./node_modules/angular-messages/angular-messages.js",
		"./node_modules/angular-ui-router/release/angular-ui-router.js",
		"./node_modules/angular-material/angular-material.js",
		"./node_modules/angular-ui-carousel/dist/ui-carousel.js",
		"./node_modules/angularfire/dist/angularfire.js",
		"./node_modules/angular-material-data-table/dist/md-data-table.js"
	];

	return gulp.src(libs)

		//Starts the creation of the maps file
		.pipe(srcmaps.init())

		//Concatenates all files in the files array into a lib.css file
		.pipe(concat('lib.js'))

		//Sends it to the public folder 
		.pipe(gulp.dest('public/js'));
});


/**
 * Build JS task
 *
 * Minifies, concatenates and moves the JS Libraries to the mobile folder
 */
gulp.task('build-js', ['clean'], function () {

	//Affects all js files under 'src/js'
	return gulp.src('src/js/**/*.js')

		//Starts the creation of the maps file	
		.pipe(srcmaps.init())

		//Minifies the files
		.pipe(uglify())

		//Concatenates all files in the files array into a lib.css file
		.pipe(concat('main.js'))

		//Ends the creation of the maps file
		.pipe(srcmaps.write('.'))

		//Sends it to the public folder
		.pipe(gulp.dest('public/js'));
});

/**
 * Build JS task
 *
 * Concatenates and moves the JS files to the dist folder (but dont minify)
 */
gulp.task('build-js-dev', ['clean'], function () {

	//Affects all js files under 'src/js'
	return gulp.src('src/index.html')
		//src/index.html
		//.pipe(inject(gulp.src('src/js/main.js', { read: false }), { name: 'main' }))
		.pipe(inject(gulp.src(['src/js/**/*.js', '!src/js/main.js'], { read: false }), { relative: true }))
		.pipe(gulp.dest('public'));

});

/**
 * Build Templates
 *
 * Task to compile angular templates
 */
gulp.task('build-templates', ['clean'], function () {

	//Affects all html files under 'src/templates'
	return gulp.src('src/template/**/*.html')

		//Remove comments from the file
		.pipe(strip())

		//Minifies the html
		.pipe(htmlmin({ collapseWhitespace: true }))

		//Puts all templates in an Angular js template cache file
		.pipe(templateCache({ module: module }))

		//Starts the creation of the maps file	
		.pipe(srcmaps.init())

		//Minifies the files
		.pipe(uglify())

		//Ends the creation of the maps file
		.pipe(srcmaps.write('.'))

		//Sends it to the public folder
		.pipe(gulp.dest('public/js'));
});



/**
 * Watch
 *
 * Task to watch modifications on files and 
 * run the build task
 */
gulp.task('watch', function () {

	//Watches the src directory and rebuilds the app 
	//whenever a file changes
	gulp.watch('src/**/*', ['build']);

});

/**
 * Watch
 *
 * Task to watch modifications on files and 
 * run the build task
 */
gulp.task('watch-dev', function () {

	//Watches the src directory and rebuilds the app 
	//whenever a file changes
	gulp.watch('src/**/*', ['build-dev']);

});

/**
 * Move Images
 *
 * Task to move images to mobile folder
 */
gulp.task('move-img', ['clean'], function () {

	//Moves all images to the public/img folder
	gulp.src('src/img/*.png')
		.pipe(gulp.dest('public/img'));

});

//'move-fonts',
gulp.task('move-fonts', ['clean'], function () {

	//Moves all images to the public/img folder
	gulp.src('./node_modules/angular-ui-carousel/dist/fonts/*')
		.pipe(gulp.dest('public/css/fonts'));

});


/**
 * Move Manifest
 *
 * Task to move the manifest to mobile folder
 */
gulp.task('move-manifest', ['clean'], function () {

	//Moves the manifest to the public folder
	gulp.src('src/manifest.json')
		.pipe(gulp.dest('public'));

});


/**
 * Move Js Dev
 *
 * Task to move the js files to mobile folder
 */
gulp.task('move-js-dev', ['clean'], function () {

	//Moves the manifest to the public folder
	gulp.src('src/js/**/*.js')
		.pipe(gulp.dest('public/js'));

});


gulp.task('resize', function () {
	gulp.src('src/img/all/*.jpg')
		.pipe(imageResize({
			width: 1000,
			height: 500,
			crop: true,
			upscale: false,
			quality: 1,
			imageMagick: true
		}))
		.pipe(gulp.dest('public/img/all'));
});