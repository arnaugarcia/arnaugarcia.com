import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public translate: TranslateService;

  constructor(translate: TranslateService) {

    translate.setDefaultLang('en');
    translate.addLangs(["en", "es", "ca"]);

    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|es|ca/) ? browserLang : 'en');

    console.clear();

    this.translate = translate;

  }

}
