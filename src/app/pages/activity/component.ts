import { Component, AfterViewInit } from '@angular/core'

@Component({
    selector: 'activity-page',
    templateUrl: './view.html',
    styleUrls: ['./style.css']
})
export class ActivityPage implements AfterViewInit { 

    bg_img: string = require('../../../../dist/images/background7.jpg');
    logs: JSON;

    constructor() {
        this.logs = require('./history.json');
    }

    ngAfterViewInit(): void {
        $('.parallax').parallax();
    }
}
