import {NgModule} from '@angular/core';
import {BrowserModule, Title} from '@angular/platform-browser';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ActiveMenuDirective, ErrorComponent, FooterComponent, MainComponent, NavbarComponent} from './layouts';
import {AppRoutingModule} from "./app-routing.module";
import {CommonModule} from "@angular/common";
import {HomeModule} from "./home/home.module";

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
    return new TranslateHttpLoader(httpClient);
}

@NgModule({
    declarations: [MainComponent, NavbarComponent, FooterComponent, ActiveMenuDirective, ErrorComponent],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        HomeModule
    ],
    providers: [
        Title
    ],
    bootstrap: [MainComponent]
})
export class AppModule {
}
