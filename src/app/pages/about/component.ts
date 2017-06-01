import { Component, AfterViewInit } from '@angular/core'
declare var $: JQueryStatic;

@Component({
    selector: 'about-page',
    templateUrl: './view.html',
    styleUrls: ['./style.css']
})
export class AboutPage implements AfterViewInit { 

    bg_img: string = require('../../../../dist/images/background3.jpg');
    scratch_img: string = require('../../../../dist/images/Scratchcat.svg');
    arduino_img: string = require('../../../../dist/images/Arduino_Logo.svg');
    html5_img: string = require('../../../../dist/images/HTML5_Badge.svg');

    ngAfterViewInit(): void {
        $('.parallax').parallax();
    }
}
