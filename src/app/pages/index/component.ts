import { Component, AfterViewInit } from '@angular/core'
declare var $:JQueryStatic;

@Component({
    selector: 'index-page',
    templateUrl: './view.html',
    styleUrls: ['./style.css']
})
export class IndexPage implements AfterViewInit {

    background2: string = require('../../../../dist/images/background2.jpg');
    background4: string = require('../../../../dist/images/background4.jpg');
    background5: string = require('../../../../dist/images/background5.jpg');

    constructor() {
    }

    ngAfterViewInit(): void {
        $('.slider').slider();
    }
}