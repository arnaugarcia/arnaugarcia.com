import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {IPortfolioItem} from './portfolio.model';

@Injectable({
    providedIn: 'root'
})
export class PortfolioService {

    constructor(private http: HttpClient) {
    }

    public query(): Observable<IPortfolioItem[]> {
        return this.http.get<IPortfolioItem[]>(`${environment.apiUrl}/portfolio.json`);
    }
}
