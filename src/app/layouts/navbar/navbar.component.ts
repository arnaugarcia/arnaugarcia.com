import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Title} from '@angular/platform-browser';
import {DOCUMENT} from '@angular/common';
import {ScrollSpyService} from '../../shared/directives/scroll-spy.service';
import {environment} from '../../../environments/environment';
import {MetaColorService} from '../../shared/services/meta-color.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    subMenuOpen = '';
    currentSection: string;

    public currentScroll = 0;
    public mobileMenuOpen = false;
    private languages: string[] = environment.languages;

    public constructor(
        public translateService: TranslateService,
        private titleService: Title,
        @Inject(DOCUMENT) private document: Document,
        private scrollSpyService: ScrollSpyService,
        private metaColorService: MetaColorService) {

    }

    ngOnInit() {
        this.initLanguage();
        this.scrollSpyService.currentSection$.subscribe((currentSection: string) => {
            this.currentSection = currentSection;
        });
    }

    private initLanguage() {
        this.translateService.addLangs(this.languages);
        const browserLang = this.translateService.getBrowserLang();
        this.translateService.use(this.languages.includes(browserLang) ? browserLang : environment.defaultLang);
    }

    /**
     * Changes the language of the app
     * @param lang a valid language [CA, ES, EN]
     */
    public changeLanguage(lang: string) {
        this.translateService.use(lang);
        this.titleService.setTitle(this.translateService.instant('APP.TITLE'));
    }

    /**
     * This method is used for getting the current scroll for the page and set the class [small-menu && header-shadow]
     */
    @HostListener('window:scroll', []) // for window scroll events
    onScroll() {
        this.currentScroll = this.document.documentElement.scrollTop;
        this.changeColorTheme();
    }

    private changeColorTheme() {
        if (this.currentScroll > 5) {
            this.metaColorService.changeThemeToWhite();
        } else {
            this.metaColorService.changeThemeToBlack();
        }
    }

    /**
     * Toggles the menu on click the burger menu
     */
    toggleMenu(): void {
        this.mobileMenuOpen = !this.mobileMenuOpen;
    }

    isCurrentSection(section: string) {
        return this.currentSection === section;
    }
}
