import {NgModule} from '@angular/core';
import {MapComponent} from './map.component';
import {SharedModule} from '../../shared/shared.module';
import {AgmCoreModule} from '@agm/core';

@NgModule({
    declarations: [MapComponent],
    imports: [
        SharedModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCMQddpPC_tiNchIMM9Gp3YPYnZM_e_i2Y'
        })
    ],
    exports: [
        MapComponent
    ]
})
export class MapModule {
}
