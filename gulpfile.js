'use strict';

const gulp = require('gulp');
const stylus = require('gulp-stylus');
const debug = require('gulp-debug');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const gulpIf = require('gulp-if');
const del = require('del');
const newer = require('gulp-newer');
// const autoprefixer = require('gulp-autoprefixer');
// const remember = require('gulp-remember');
// const path = require('path');
const browserSync = require('browser-sync').create();
const notify = require('gulp-notify');
// const plumber = require('gulp-plumber');
const multipipe = require('multipipe');


const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

// gulp.task('styles', function () {
//     return gulp.src('frontend/css/main.styl')
//         .pipe(plumber())
//         .pipe(gulpIf(isDevelopment, sourcemaps.init()))
//         .pipe(stylus())
//         .on('error', notify.onError(function (err) {
//             return {
//                 title: 'Styles',
//                 message: err.message
//             };
//         }))
//         .pipe(gulpIf(isDevelopment, sourcemaps.write()))
//         .pipe(gulp.dest('public'));
// });

gulp.task('styles', function () {
    return multipipe(
        gulp.src('frontend/css/main.styl'),
        gulpIf(isDevelopment, sourcemaps.init()),
        stylus(),
        gulpIf(isDevelopment, sourcemaps.write()),
        gulp.dest('public')
    ).on('error', notify.onError())
});

gulp.task('clean', function () {
    return del('public');
});

gulp.task('assets', function () {
    return gulp.src('frontend/assets/**', {since: gulp.lastRun('assets')})
        .pipe(newer('public'))
        .pipe(debug({title: 'assets'}))
        .pipe(gulp.dest('public'));
});

gulp.task('libs_js', function () {
    return gulp.src('frontend/js/libs/**')
        .pipe(gulp.dest('public/js/libs'));
});

gulp.task('js', function () {
    return gulp.src('frontend/js/src/**')
        .pipe(concat('script.main.js'))
        .pipe(gulp.dest('public/js'));
});

gulp.task ('build', gulp.series(
    'clean',
    gulp.parallel('styles', 'assets', 'js', 'libs_js'))
);

gulp.task('watch', function () {
    gulp.watch('frontend/css/**/*.*', gulp.series('styles'));
    gulp.watch('frontend/assets/**/*.*', gulp.series('assets'));
});

gulp.task ('serve', function () {
    browserSync.init({
        server: 'public'
    });

    browserSync.watch('public/**/*.*').on('change', browserSync.reload);
});

gulp.task ('dev',
    gulp.series('build', gulp.parallel('watch', 'serve'))
);

