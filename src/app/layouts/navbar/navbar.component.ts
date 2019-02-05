import {Component, HostListener, Inject} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Title} from "@angular/platform-browser";
import {DOCUMENT} from "@angular/common";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    animations: [
        trigger('openClose', [
            state('true', style({ height: '*' })),
            state('false', style({ height: '0px' })),
            transition('false <=> true', animate(100))
        ])
    ]
})
export class NavbarComponent {

    subMenuOpen: string = '';

    public currentScroll = 0;
    public mobileMenuOpen: boolean = false;

    public constructor(
        public translate: TranslateService,
        private titleService: Title,
        @Inject(DOCUMENT) private document: Document
    ) {
        translate.addLangs(['en', 'es', 'ca']);
        let browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|es|ca/) ? browserLang : 'en');
    }

    public changeLanguage(lang: string) {
        this.translate.use(lang);
        this.titleService.setTitle(this.translate.instant("APP.TITLE"));
    }

    @HostListener('window:scroll', []) // for window scroll events
    onScroll() {
        this.currentScroll = this.document.documentElement.scrollTop
    }

    toggleMenu(): void {
        this.mobileMenuOpen = !this.mobileMenuOpen;
    }
}
