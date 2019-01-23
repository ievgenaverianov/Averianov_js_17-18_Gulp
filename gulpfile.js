'use strict';

const gulp = require('gulp');
const stylus = require('gulp-stylus');

gulp.task('styles', function () {
    gulp.src('frontend/css/**/*.styl')
      .pipe(stylus())
      .pipe(gulp.dest('public'))
})