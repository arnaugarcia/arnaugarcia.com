import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {IMail} from './email.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private url = 'http://services.arnaugarcia.com';
  private email = 'arnau.garcia.gallego@gmail.com';
  private company = 'arnaugarcia.com';

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
