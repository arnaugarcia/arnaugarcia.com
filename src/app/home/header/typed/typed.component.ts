import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import Typed from 'typed.js';

@Component({
    selector: 'app-typed',
    templateUrl: './typed.component.html',
    styleUrls: ['./typed.component.css']
})
export class TypedComponent implements OnInit {

    private translatedText = '';
    private typed: Typed;

    constructor(private translateService: TranslateService) {
    }

    ngOnInit() {
        this.translateService.stream('INTRO.SUBTITLE').subscribe((translation: string | any) => {
            this.translatedText = translation;
            this.initType();
        });
    }

    /**
     * Starts the TypedJS. if the Typed is already running it destroys.
     */
    private initType(): void {
        const options = {
            strings: this.translatedText.split('|'),
            typeSpeed: 50,
            backSpeed: 50,
            showCursor: true,
            loop: true
        };

        if (!this.typed) {
            this.typed = new Typed('#typed', options);
        } else {
            this.typed.reset(true);
        }
    }

}
