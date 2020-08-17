import {NgModule} from '@angular/core';
import {MapComponent} from './map.component';
import {SharedModule} from '../../shared/shared.module';
import {GoogleMapsModule} from '@angular/google-maps';

@NgModule({
    declarations: [MapComponent],
    imports: [
        SharedModule,
        GoogleMapsModule
    ],
    exports: [
        MapComponent
    ]
})
export class MapModule {
}
