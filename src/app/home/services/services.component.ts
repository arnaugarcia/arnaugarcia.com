import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {IService} from './service.model';
import {ServicesService} from './services.service';

@Component({
    selector: 'app-services',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

    public services: IService[] = [];

    constructor(private servicesService: ServicesService) {
    }

    ngOnInit() {
        this.services = this.servicesService.queryServices();
    }

}
