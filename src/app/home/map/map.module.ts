import {NgModule} from '@angular/core';
import {MapComponent} from './map.component';
import {SharedModule} from '../../shared/shared.module';
import {AgmCoreModule} from '@agm/core';
import {environment} from '../../../environments/environment';

@NgModule({
    declarations: [MapComponent],
    imports: [
        SharedModule,
        AgmCoreModule.forRoot({
            apiKey: environment.googleMapsApiKey
        })
    ],
    exports: [
        MapComponent
    ]
})
export class MapModule {
}
