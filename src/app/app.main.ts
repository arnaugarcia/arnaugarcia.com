import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app.module';
import {environment} from '../environments/environment';

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).then(() => {
    if ('serviceWorker' in navigator && environment.production) {
        navigator.serviceWorker.register('/arnaugarcia-sw.js')
            .then(value => console.log(value))
            .catch(reason => console.log(reason));
    }
}).catch(err => console.log(err));
