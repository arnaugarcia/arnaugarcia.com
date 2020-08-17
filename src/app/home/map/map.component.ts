import {Component, OnInit} from '@angular/core';
import {mapStyle} from './map.constants';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html'
})
export class MapComponent implements OnInit {
    latitude = 41.3559809;
    longitude = 1.97556;
    zoom = 13;
    iconUrl = 'assets/images/map-icon.png';
    styles: any[] = mapStyle;

    ngOnInit(): void {
        console.log('Map Init');
    }



}
