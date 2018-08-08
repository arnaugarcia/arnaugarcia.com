import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Title} from "@angular/platform-browser";

/*@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    menuOpen: string = '';

    public constructor(
        public translate: TranslateService,
        private titleService: Title
    ) {

        translate.addLangs(["en", "es", "ca"]);
        let browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|es|ca/) ? browserLang : 'en');
    }

    public changeLanguage(lang: string) {
        this.translate.use(lang);
        this.titleService.setTitle(this.translate.instant("APP.TITLE"));
    }

}*/
