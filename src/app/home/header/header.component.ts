import {Component, OnInit} from '@angular/core';
import Typed from "typed.js";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


    constructor() {}

    ngOnInit() {
        let options = {
            strings: ["Books.", "Cinema.", "Paintings.", "Music."],
            typeSpeed: 100,
            backSpeed: 100,
            showCursor: false,
            loop: true
        };

        let typed = new Typed(".typing-element", options);
    }

}
