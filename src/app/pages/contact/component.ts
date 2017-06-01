import { Component, AfterViewInit } from '@angular/core'

@Component({
    selector: 'contact-page',
    templateUrl: './view.html',
    styleUrls: ['./style.css']
})
export class ContactPage implements AfterViewInit { 

    bg_img: string = require('../../../../dist/images/background6.jpg');

    ngAfterViewInit(): void {
        $('.parallax').parallax();
    }

}
