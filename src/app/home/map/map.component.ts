import {Component, OnInit} from '@angular/core';
import {mapStyle} from './map.constants';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html'
})
export class MapComponent implements OnInit {

    private torrellesCoordinate: google.maps.LatLngLiteral = {lat: 41.3559809, lng: 1.97556};

    public markerOptions: google.maps.MarkerOptions = {
        position: this.torrellesCoordinate,
        icon: 'assets/images/map-icon.png'
    };

    public mapOptions: google.maps.MapOptions = {
        center: this.torrellesCoordinate,
        zoom: 13,
        styles: mapStyle,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
        zoomControl: false
    };

    ngOnInit(): void {
        console.log('Map Init');
    }


}
