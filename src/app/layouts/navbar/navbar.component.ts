import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Title} from "@angular/platform-browser";
import {DOCUMENT} from "@angular/common";
import {ScrollSpyService} from "../../shared/directives/scroll-spy.service";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    subMenuOpen: string = '';
    currentSection: string;

    public currentScroll = 0;
    public mobileMenuOpen: boolean = false;

    public constructor(
        public translate: TranslateService,
        private titleService: Title,
        @Inject(DOCUMENT) private document: Document,
        private scrollSpyService: ScrollSpyService) {
        translate.addLangs(['en', 'es', 'ca']);
        let browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|es|ca/) ? browserLang : 'en');
    }

    ngOnInit(): void {
        this.scrollSpyService.currentSection$.subscribe((currentSection: string) => {
            this.currentSection = currentSection;
        });
    }

    /**
     * Changes the language of the app
     * @param lang a valid language [CA, ES, EN]
     */
    public changeLanguage(lang: string) {
        this.translate.use(lang);
        this.titleService.setTitle(this.translate.instant('APP.TITLE'));
    }

    /**
     * This method is used for getting the current scroll for the page and set the class [small-menu && header-shadow]
     */
    @HostListener('window:scroll', []) // for window scroll events
    onScroll() {
        this.currentScroll = this.document.documentElement.scrollTop
    }

    /**
     * Toggles the menu on click the burger menu
     */
    toggleMenu(): void {
        this.mobileMenuOpen = !this.mobileMenuOpen;
    }

    scrollTo(section) {
        document.querySelector('#' + section).scrollIntoView({behavior: 'smooth'});
    }

    isCurrentSection(section: string) {
        return this.currentSection === section;
    }
}
