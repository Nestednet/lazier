var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifycss = require('gulp-minify-css');

gulp.task('build', ['minify-js', 'minify-css']);

gulp.task('minify-js', function () {
  gulp.src('src/*.js')
  .pipe(concat('lazier.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./'))
});

gulp.task('minify-css', function () {
  gulp.src('src/*.css')
  .pipe(concat('lazier.min.css'))
  .pipe(minifycss())
  .pipe(gulp.dest('./'))
});
