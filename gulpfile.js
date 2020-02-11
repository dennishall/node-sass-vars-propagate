var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

// mb
gulp.task('sass-mb', function () {
  return gulp.src('./src/scss/main-mb.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

// fl
gulp.task('sass-fl', function () {
  return gulp.src('./src/scss/main-fl.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

// all
gulp.task('css', gulp.series('sass-mb', 'sass-fl'));
