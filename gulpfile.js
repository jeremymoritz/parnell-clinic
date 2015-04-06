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
var sourcemaps = require('gulp-sourcemaps');
var react = require('gulp-react');
var bower = require('gulp-bower');
var concat = require('gulp-concat');
var notify = require('gulp-notify');
var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');

var path = {
	JADE: 'src/jade/index.jade',
	HTML: 'src/index.html',
	ALL: ['src/js/*.js', 'src/js/**/*.js', 'src/js/*.jsx', 'src/js/**/*.jsx', 'src/index.html'],
	JS: ['src/js/*.jsx', 'src/js/**/*.jsx', 'src/js/*.js', 'src/js/**/*.js'],
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
	gulp.src(path.JADE)
		.pipe(jade({pretty: true}))
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
		.pipe(sourcemaps.write('./maps/'))
		.pipe(gulp.dest('dist/css'));
});

gulp.task('transpile-jsx', function taskTranspileJSX() {
  gulp.src(path.JS)
		.pipe(react({harmony: true}))   //  convert to .js files
		.on('error', handleErrors)
		.pipe(gulp.dest(path.DEST_JS));
});

// Lint and JSCS our scripts
gulp.task('scripts', function taskScripts() {
	gulp.src('dist/js/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.on('error', handleErrors)
		.pipe(jscs())
		.on('error', handleErrors);
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
	gulp.watch('gulpfile.js', ['default']);
	gulp.watch('src/jade/*.jade', ['template']);
	gulp.watch('src/js/*', ['transpile-jsx', 'scripts']);
	gulp.watch('src/scss/*.scss', ['sass']);
	gulp.watch('src/static/**/*', ['copy-static']);
});

gulp.task('browserify', ['transpile-jsx'], function() {
	var bundleMethod = global.isWatching ? watchify : browserify;

	var bundler = bundleMethod({
		// Specify the entry point of your app
		entries: ['./dist/js/index.js'],
		// Add file extentions to make optional in your requires
		extensions: []
	});

	var bundle = function() {
		// Enable source maps!
		return bundler
			.bundle()
			// Report compile errors
			.on('error', handleErrors)
			// Use vinyl-source-stream to make the
			// stream gulp compatible. Specify the
			// desired output filename here.
			.pipe(source('parnell.js'))
			// Specify the output destination
			.pipe(gulp.dest('dist'));
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
