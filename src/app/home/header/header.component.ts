import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import Typed from 'typed.js';
import {TranslateService} from '@ngx-translate/core';
import {ParticlesConstants} from './particles-constants';

declare var particlesJS: any;

@Component({
    selector: 'app-header',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    private translatedText = '';
    private typed: Typed;

    constructor(private translateService: TranslateService) {}

    ngOnInit() {

        this.translateService.stream('INTRO.SUBTITLE').subscribe((translation: string | any) => {
            this.translatedText = translation;
            console.log('Typed!');
            this.initType();
        });

        particlesJS('particles-js', ParticlesConstants.particlesConfig);

    }

    /**
     * Starts the TypedJS. if the Typed is already running it destroys.
     */
    private initType(): void {
        if (this.typed) {
            this.typed.destroy();
        }
        const options = {
            strings: this.translatedText.split('|'),
            typeSpeed: 50,
            backSpeed: 50,
            showCursor: true,
            loop: true
        };
        this.typed = new Typed('#typed', options);
    }

}
