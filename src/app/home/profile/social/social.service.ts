import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ISocialNetwork} from './social.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class SocialService {

    constructor(private http: HttpClient) {
    }

    public querySocialNetworks(): Observable<ISocialNetwork[]> {
        return this.http.get<ISocialNetwork[]>('https://arnau-garcia.firebaseio.com/social-networks.json');
    }
}
