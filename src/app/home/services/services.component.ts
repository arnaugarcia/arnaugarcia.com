import {Component, OnInit} from '@angular/core';
import {IService} from './service.model';

@Component({
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

    public services: IService[] = [];

    constructor() {
    }

    ngOnInit() {
        this.services.push({title: 'SERVICE.SERVICES.SERVICE1.TITLE', text: 'SERVICE.SERVICES.SERVICE1.TEXT', logo: 'icon-global'});
        this.services.push({title: 'SERVICE.SERVICES.SERVICE2.TITLE', text: 'SERVICE.SERVICES.SERVICE2.TEXT', logo: 'icon-mobile'});
        this.services.push({title: 'SERVICE.SERVICES.SERVICE3.TITLE', text: 'SERVICE.SERVICES.SERVICE3.TEXT', logo: 'icon-tools'});
        this.services.push({title: 'SERVICE.SERVICES.SERVICE4.TITLE', text: 'SERVICE.SERVICES.SERVICE4.TEXT', logo: 'icon-circle-compass'});
        this.services.push({title: 'SERVICE.SERVICES.SERVICE5.TITLE', text: 'SERVICE.SERVICES.SERVICE5.TEXT', logo: 'icon-layers'});
        this.services.push({title: 'SERVICE.SERVICES.SERVICE6.TITLE', text: 'SERVICE.SERVICES.SERVICE6.TEXT', logo: 'icon-key'});
    }

}
