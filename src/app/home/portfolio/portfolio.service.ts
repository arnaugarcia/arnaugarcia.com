import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ISocialNetwork} from '../profile/social/social.model';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http: HttpClient) {
  }

  public query(): Observable<ISocialNetwork[]> {
    return this.http.get<ISocialNetwork[]>(`${environment.apiUrl}/social-networks.json`);
  }
}
