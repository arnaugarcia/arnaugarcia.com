import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {IService} from './service.model';

@Injectable({
    providedIn: 'root'
})
export class ServicesService {

    constructor(private http: HttpClient) {
    }

    public queryServices(): Observable<IService[]> {
        return this.http.get<IService[]>(`${environment.apiUrl}/services.json`);
    }

}
