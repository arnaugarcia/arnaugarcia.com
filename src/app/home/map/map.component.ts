import {Component} from '@angular/core';
import {MapTypeStyle} from '@agm/core';
import {mapStyle} from './map.constants';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html'
})
export class MapComponent {
    latitude = 41.3559809;
    longitude = 1.97556;
    zoom = 13;
    iconUrl = 'assets/images/map-icon.png';
    styles: MapTypeStyle[] = mapStyle;
}
