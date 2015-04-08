/*
	gulpfile.js
	===========
	Rather than manage one giant configuration file responsible
	for creating multiple tasks, each task has been broken out into
	its own file in gulp/tasks. Any file in that folder gets automatically
	required by the loop in ./gulp/index.js (required below).

	To add a new task, simply add a new task file to gulp/tasks.
*/

// require('./gulp');	//	this is the ONLY line in use at ULX (see comment above)


// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var fs = require('fs');
var del = require('del');
var jade = require('gulp-jade');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var bower = require('gulp-bower');
var concat = require('gulp-concat');
var notify = require('gulp-notify');
var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');

var path = {
	JADE: 'src/jade/index.jade',
	JADE_ALL: 'src/jade/**/*.jade',
	HTML: 'src/index.html',
	ALL: ['src/js/**/*.js', 'src/index.html'],
	JS: ['src/js/**/*.js'],
	MINIFIED_OUT: 'build.min.js',
	DEST_JS: 'dist/js',
	DEST_SRC: 'dist/src',
	DEST_BUILD: 'dist/build',
	DEST: 'dist'
};

function handleErrors() {
	var args = Array.prototype.slice.call(arguments);

	// Send error to notification center with gulp-notify
	notify.onError({
		title: 'Compile Error',
		message: '<%= error.message %>'
	}).apply(this, args);

	// Keep gulp from hanging on this task
	this.emit('end');
};

// Delete all files (not folders) in the dist directory
//	NOTE: THIS IS NOT RUN AUTOMATICALLY
gulp.task('clean', function taskClean() {
	del([path.DEST]);
});

//  Turn Jade into HTML
gulp.task('template', function taskTemplate() {
	// gulp.src(path.JADE)
	gulp.src(path.JADE_ALL)
		.pipe(jade({
			pretty: true,
			doctype: 'html'
		}))
		// .on('error', handleErrors)
		.pipe(gulp.dest(path.DEST));
});

// Compile Our Sass
gulp.task('sass', function taskSass() {
	gulp.src('src/scss/index.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({
			errLogToConsole: false,
			onError: function(err) {
				return notify().write(err);
			}
		}))
		.pipe(autoprefixer("last 2 versions", "> 2%", "ie 9"))
		.pipe(sourcemaps.write('./maps/'))
		.pipe(gulp.dest('dist/css'));
});

// Lint and JSCS our scripts
gulp.task('scripts', function taskScripts() {
<<<<<<< HEAD
	gulp.src('src/js/*.js')
		// .pipe(jshint())
		// .pipe(jshint.reporter('default'))
		// .on('error', handleErrors)
=======
	gulp.src(path.JS)
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.on('error', handleErrors)
>>>>>>> 8f3cfc0d928d46f1a4b0d4c485037feb702b91f9
		.pipe(jscs())
		.on('error', handleErrors)
		.pipe(gulp.dest(path.DEST_JS));
});

// Copy static directory without changes
gulp.task('copy-static', function taskCopyStatic() {
	gulp.src('src/static/**/*')
		.pipe(gulp.dest(path.DEST))
		.on('error', handleErrors);
});

gulp.task('bower', function taskBower() {
	bower({
			directory: './bower_components',
			cwd: '.'
		})
		.on('error', handleErrors)
		.pipe(gulp.dest('dist/lib'));
});

// Watch Files For Changes
gulp.task('watch', function taskWatchSrcAndUpdateDist() {
	gulp.watch(path.JADE_ALL, ['template']);
	gulp.watch(path.JS, ['scripts']);
	gulp.watch('src/scss/*.scss', ['sass']);
	gulp.watch('src/static/**/*', ['copy-static']);
});

gulp.task('browserify', function taskBrowserify() {
	var bundleMethod = global.isWatching ? watchify : browserify;

	var bundler = bundleMethod({
		// Specify the entry point of your app
		entries: ['./src/js'],
		// Add file extentions to make optional in your requires
		extensions: []
	});

	var bundle = function bundleFunction() {
		// Enable source maps!
		return bundler
			.bundle()
			// Report compile errors
			.on('error', handleErrors)
			// Use vinyl-source-stream to make the stream gulp compatible.
			// Specify the output filename here.
			.pipe(source('js/bundle.js'))
			// Specify the output destination
			.pipe(gulp.dest(path.DEST));
	};

	return bundle();
});

// Default Task (perform these tasks in order)
gulp.task('default', [
	'template',		
	'browserify',
	'sass',
	'scripts',
	'copy-static',
	'bower',
	'watch'
]);
