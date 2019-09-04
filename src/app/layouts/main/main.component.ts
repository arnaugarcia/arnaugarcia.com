import {ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {DOCUMENT} from '@angular/common';
import {Subscription} from 'rxjs';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {faTwitter} from '@fortawesome/free-brands-svg-icons/faTwitter';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons/faLinkedin';
import {faGithub} from '@fortawesome/free-brands-svg-icons/faGithub';
import {faInstagram} from '@fortawesome/free-brands-svg-icons/faInstagram';
import {fab} from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-main',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './main.component.html'
})
export class MainComponent implements OnInit, OnDestroy {

    private lang$: Subscription = new Subscription();

    constructor(@Inject(DOCUMENT) private document: Document,
                private translateService: TranslateService,
                library: FaIconLibrary) {

        library.addIconPacks(fab);
        library.addIcons(faTwitter);
        library.addIcons(faLinkedin);
        library.addIcons(faGithub);
        library.addIcons(faInstagram);
    }

    ngOnInit() {
        this.lang$ = this.translateService.onLangChange.subscribe((lang) => {
            this.document.documentElement.lang = lang.lang;
        }, (error) => {
            console.error(error);
        });
    }

  ngOnDestroy(): void {
      this.lang$.unsubscribe();
  }

}
