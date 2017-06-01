import { Component, AfterViewInit } from '@angular/core'

@Component({
    selector: 'account-page',
    templateUrl: './view.html',
    styleUrls: ['./style.css']
})
export class AccountPage implements AfterViewInit { 

    bg_img: string = require('../../../../dist/images/background8.jpg');

    ngAfterViewInit(): void {
        $('.parallax').parallax();
    }

}