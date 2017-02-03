var gulp = require('gulp');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');


gulp.task('watch', function() {
  gulp.watch('scss/**/*.scss',['sass']);
});

gulp.task('sass', function() {
  return gulp.src('scss/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({errLogToConsole: true, outputStyle: 'nested'}))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('css'))
});

gulp.task("jshint", function() {
  return gulp.src('js/**/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter('default'))
});


gulp.task('pranie', function() {
  console.log("robię pranie");
});

gulp.task('default', ['sass', 'jshint', 'watch']);