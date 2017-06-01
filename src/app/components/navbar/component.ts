import { Component, AfterViewInit } from '@angular/core'

declare var $:JQueryStatic;

@Component({
    selector: 'navbar',
    templateUrl: './view.html',
    styleUrls: ['./style.css']
})
export class NavbarComponent implements AfterViewInit {

    logo: string = require('../../../../dist/images/logo.svg');
    is_open: boolean = false;

    constructor() {
    }

    ngAfterViewInit(): void {
        $('.button-collapse').sideNav({
            menuWidth: 300, // Default is 300
            edge: 'left', // Choose the horizontal origin
            closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
            draggable: true // Choose whether you can drag to open on touch screens
        });
    }
}
