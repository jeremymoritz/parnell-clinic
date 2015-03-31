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
var notify = require('gulp-notify');

function handleErrors(args) {
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
	del(['dist/*']);
});

//  Turn Jade into HTML
gulp.task('template', function taskTemplate() {
	gulp.src('src/jade/index.jade')
		.pipe(jade({pretty: true}))
		// .on('error', handleErrors)
		.pipe(gulp.dest('dist'));
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
  gulp.src('src/js/*.jsx')
		.pipe(react({harmony: true}))   //  convert to .js files
		.on('error', handleErrors)
		.pipe(gulp.dest('dist/js'));
});

// Lint and JSCS our scripts
gulp.task('scripts', function taskScripts() {
	gulp.src('src/js/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.on('error', handleErrors)
		.pipe(jscs())
		.on('error', handleErrors)
		.pipe(gulp.dest('dist/js'));
});

// Copy static directory without changes
gulp.task('copy-static', function taskCopyStatic() {
	gulp.src('src/static/**/*')
		.pipe(gulp.dest('dist'))
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

// Default Task (perform these tasks in order)
gulp.task('default', [
	'template',
	'transpile-jsx',
	'sass',
	'scripts',
	'copy-static',
	'bower',
	'watch'
]);
