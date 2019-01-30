import './vendor.ts'
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {ErrorComponent, FooterComponent, MainComponent, NavbarComponent} from './layouts';
import {AppRoutingModule} from "./app-routing.module";
import {HomeModule} from "./home/home.module";
import {SharedModule} from "./shared/shared.module";


@NgModule({
    declarations: [
        MainComponent,
        NavbarComponent,
        FooterComponent,
        ErrorComponent
    ],
    imports: [
        BrowserModule,
        SharedModule,
        AppRoutingModule,
        HttpClientModule,
        HomeModule
    ],
    bootstrap: [MainComponent]
})
export class AppModule {
}
