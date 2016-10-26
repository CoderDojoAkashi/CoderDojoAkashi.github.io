'use strict'

const gulp = require('gulp');
const fs = require('fs');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const ejs = require('gulp-ejs');
const config = require('../config').simple;
const files = './src/*.ejs';

gulp.task('build', () => {
    gulp.src(
    [
    'src/*.ejs', //入力ソースパターン&path
    '!' + "src/_*.ejs" //入力除外ソースパターン&path
    ])
    .pipe(plumber())
    .pipe(ejs())
    .pipe(rename({extname: '.html'}))
    .pipe(gulp.dest(config.ejs.dest));
});

