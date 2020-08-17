import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ErrorComponent, FooterComponent, MainComponent, NavbarComponent} from './layouts';
import {AppRoutingModule} from './app-routing.module';
import {HomeModule} from './home/home.module';
import {SharedModule} from './shared/shared.module';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

// Extends the Window function to support Google Maps Dynamic import
declare global {
    interface Window {
        initMap();
    }
}

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
    return new TranslateHttpLoader(httpClient);
}

@NgModule({
    declarations: [
        MainComponent,
        NavbarComponent,
        FooterComponent,
        ErrorComponent
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        SharedModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        AppRoutingModule,
        HttpClientModule,
        HomeModule,
        ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
    ],
    bootstrap: [MainComponent]
})
export class AppModule {
}
