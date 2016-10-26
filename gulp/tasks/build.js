'use strict'

const gulp = require( 'gulp' );
const fs = require( 'fs' );
const plumber = require( 'gulp-plumber' );
const rename = require( 'gulp-rename' );
const ejs = require( 'gulp-ejs' );
const config = require('../config').simple;
const template = './src/template.ejs';

gulp.task( 'build', () => {
        gulp.src( template )
            .pipe( plumber() )
            .pipe(ejs({
            }))
        .pipe( rename("template.html") )
            .pipe(gulp.dest( config.ejs.dest ));
});

