import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Title} from '@angular/platform-browser';
import {ScrollSpyDirective} from './directives/scroll-spy.directive';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ScrollToDirective} from './directives/scroll-to.directive';
import {FormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import { IconSquarePipe } from './pipes/icon-square.pipe';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        TranslateModule
    ],
    providers: [
        Title,
        TranslateModule
    ],
    declarations: [ScrollSpyDirective, ScrollToDirective, IconSquarePipe],
    exports: [CommonModule, FormsModule, ScrollSpyDirective, ScrollToDirective, TranslateModule]
})
export class SharedModule {
}
