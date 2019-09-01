import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {IMail} from './email.model';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private url = environment.emailConfig.apiUrl;
  private email = environment.emailConfig.email;
  private company = environment.emailConfig.companyName;

  constructor(private http: HttpClient) {}

  sendMessage(email: IMail): Observable<HttpResponse<void>> {
    const urlSearchParams = new URLSearchParams();
    urlSearchParams.append('name', email.name.toString());
    urlSearchParams.append('email', email.email.toString());
    urlSearchParams.append('phone', email.phone.toString());
    urlSearchParams.append('message', email.message.toString());

    const headers = new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded'});

    return this.http.post<void>(
        `${this.url}?email=${this.email}&company=${this.company}`,
        urlSearchParams.toString(),
        {headers: headers, observe: 'response'});
  }
}
