import {Injectable} from '@angular/core';
import {IService} from './service.model';

@Injectable({
    providedIn: 'root'
})
export class ServicesService {

    public queryServices(): IService[] {
        return [
            {
                'icon': 'icon-global',
                'text': 'SERVICE.SERVICES.SERVICE1.TEXT',
                'title': 'SERVICE.SERVICES.SERVICE1.TITLE'
            },
            {
                'icon': 'icon-mobile',
                'text': 'SERVICE.SERVICES.SERVICE2.TEXT',
                'title': 'SERVICE.SERVICES.SERVICE2.TITLE'
            },
            {
                'icon': 'icon-tools',
                'text': 'SERVICE.SERVICES.SERVICE3.TEXT',
                'title': 'SERVICE.SERVICES.SERVICE3.TITLE'
            },
            {
                'icon': 'icon-circle-compass',
                'text': 'SERVICE.SERVICES.SERVICE4.TEXT',
                'title': 'SERVICE.SERVICES.SERVICE4.TITLE'
            },
            {
                'icon': 'icon-layers',
                'text': 'SERVICE.SERVICES.SERVICE5.TEXT',
                'title': 'SERVICE.SERVICES.SERVICE5.TITLE'
            },
            {
                'icon': 'icon-key',
                'text': 'SERVICE.SERVICES.SERVICE6.TEXT',
                'title': 'SERVICE.SERVICES.SERVICE6.TITLE'
            }
        ];
    }

}
