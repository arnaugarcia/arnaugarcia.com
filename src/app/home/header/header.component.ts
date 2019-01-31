import {Component, OnInit} from '@angular/core';
import Typed from "typed.js";
import {TranslateService} from "@ngx-translate/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    private translatedText: string = '';
    private typed: Typed;

    constructor(private translateService: TranslateService) {
    }

    ngOnInit() {

        this.translateService.stream('INTRO.SUBTITLE').subscribe((translation: string | any) => {
            this.translatedText = translation;
            this.initType();
        });

    }

    private initType(): void {
        this.typed = null;
        let options = {
            strings: this.translatedText.split('|'),
            typeSpeed: 50,
            backSpeed: 50,
            showCursor: false,
            loop: true
        };
        this.typed = new Typed(".typing-element", options);
    }

}
