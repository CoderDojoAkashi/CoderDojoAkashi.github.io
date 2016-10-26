'use strict'

const gulp = require( 'gulp' );
const fs = require( 'fs' );
const plumber = require( 'gulp-plumber' );
const rename = require( 'gulp-rename' );
const ejs = require( 'gulp-ejs' );
const config = require('../config').simple;
const jsonData = 'pages.json';
const template = 'template.ejs';
const json = JSON.parse(fs.readFileSync( jsonData ));
const pages = json.pages;

gulp.task( 'build', () => {
    for (let i = 0; i < pages.length; i++) {
        const id = pages[i].id;

        gulp.src( template )
            .pipe( plumber() )
            .pipe(ejs({
                jsonData: pages[i]
            }))
        .pipe( rename(id + ".html") )
            .pipe(gulp.dest( config.ejs.dest ));
    }
});

