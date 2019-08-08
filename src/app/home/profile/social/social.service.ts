import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ISocialNetwork} from './social.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class SocialService {

    constructor(private http: HttpClient) {
    }

    public querySocialNetworks(): Observable<ISocialNetwork[]> {
        return this.http.get<ISocialNetwork[]>(`${environment.apiUrl}/social-networks.json`);
    }
}
