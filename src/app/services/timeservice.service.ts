import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeserviceService {
  private apiUrl = 'https://api.api-ninjas.com/v1/worldtime';
  private apiKey = 'XhQn5Cz+v08xI5lk7af86g==1jzN09NtiWH1RiqC';

  constructor(private http: HttpClient) {}

  gettime(): Observable<any> {
    const url = `${this.apiUrl}?city=Tunis`;
    const headers = new HttpHeaders().set('x-api-key', this.apiKey);
    return this.http.get<any>(url, { headers });
  }
}
