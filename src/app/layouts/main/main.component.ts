import {ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {DOCUMENT} from '@angular/common';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-main',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './main.component.html'
})
export class MainComponent implements OnInit, OnDestroy {

    private lang$: Subscription = new Subscription();

    constructor(@Inject(DOCUMENT) private document: Document,
                private translateService: TranslateService) {
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
