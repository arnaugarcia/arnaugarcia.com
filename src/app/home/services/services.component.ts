import {Component, OnInit} from '@angular/core';
import {IService} from './service.model';
import {ServicesService} from './services.service';

@Component({
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

    public services: IService[] = [];

    constructor(private servicesService: ServicesService) {
    }

    ngOnInit() {
        this.servicesService.queryServices().subscribe()
    }

}
