import {ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import {mapStyle} from './map.constants';

declare var google: any;

@Component({
    selector: 'app-map',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './map.component.html'
})
export class MapComponent implements OnInit {

    latitude = 41.3559809;
    longitude = 1.97556;
    zoom = 13;
    iconUrl = 'assets/images/map-icon.png';

    ngOnInit(): void {
        /*const map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: this.latitude, lng: this.longitude},
            zoom: this.zoom,
            styles: mapStyle,
            disableDefaultUI: true,
            gestureHandling: 'none'
        });*/

        /*const marker = new google.maps.Marker({
            position: {lat: this.latitude, lng: this.longitude},
            icon: this.iconUrl,
            map: map
        });*/
    }
}
