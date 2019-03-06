import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {Title} from "@angular/platform-browser";
import { ScrollSpyDirective } from './directives/scroll-spy.directive';
import { ProgressBarDirective } from './directives/progress-bar.directive';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
    return new TranslateHttpLoader(httpClient);
}

@NgModule({
    imports: [
        CommonModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    providers: [
        Title
    ],
    declarations: [ScrollSpyDirective, ProgressBarDirective],
    exports: [TranslateModule, ScrollSpyDirective, ProgressBarDirective]
})
export class SharedModule {
}
