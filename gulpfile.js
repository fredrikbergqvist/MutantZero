var gulp = require('gulp');

// Include Our Plugins
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var browserify = require('browserify');
var babelify = require('babelify');
var rename = require('gulp-rename');
var babel = require("gulp-babel");
var source = require('vinyl-source-stream');
var fs = require("fs");

gulp.task('sass', function() {
	return gulp.src('scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('css'));
});


gulp.task('modules', function() {

	browserify({ debug: true })
		.transform(babelify)
		.require("./js/MonsterGenerator/GenerateMonster.js", { entry: true })
		.bundle()
		.on("error", function (err) { console.log("Error: " + err.message); })
		.pipe(fs.createWriteStream("bundle.js"));
});

// Watch Files For Changes
gulp.task('watch', function() {
	gulp.watch('js/**/*.js', ['modules']);
	//gulp.watch('scss/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['modules', 'watch']);