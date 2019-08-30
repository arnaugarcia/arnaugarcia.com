import { Component } from '@angular/core';
import {MapTypeStyle} from '@agm/core';
import {mapStyle} from './map.constants';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  styles: MapTypeStyle[] = mapStyle;

}
