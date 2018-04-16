'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function() {
  console.log('starting gulp sass');
  return gulp.src('./public/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
    console.log('done gulping sass');
});

gulp.task('sass:watch', function(){
  gulp.watch('./public/sass/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'sass:watch']);
