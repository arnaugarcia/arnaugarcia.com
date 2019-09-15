import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'app-map',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './map.component.html'
})
export class MapComponent {

    latitude = 41.3559809;
    longitude = 1.97556;
    zoom = 13;
    iconUrl = 'assets/images/map-icon.png';

    public staticUrl = `https://maps.googleapis.com/maps/api/staticmap?center="${this.latitude},${this.longitude}"&zoom=${this.zoom}
        &size=1850x500
        &markers=color:red%7C%7C41.3559809,1.97556
        &key=AIzaSyAGMmA6Q2kr8mFYqhsbmK2Ww5K4eBR3hGg`;

    constructor() {
        //document.getElementById('myDiv').clientHeight;
    }


}
