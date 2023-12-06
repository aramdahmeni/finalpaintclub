import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, switchMap, tap } from 'rxjs';
import { Atelier } from '../classes/atelier';


const urlatelier = 'http://localhost:3000/ateliers';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  constructor(public http: HttpClient) {}

  addRequestsToEvent( userId: number, atelierId: number, username:string, workshop:string): Observable<Atelier> {
    return this.http.get<Atelier>(`${urlatelier}/${atelierId}`).pipe(
      tap((atelier: Atelier) => {
        if (!atelier['requests']) {
          atelier['requests'] = [];
        }
        atelier['requests'].push({ userId,atelierId, username, workshop });
      }),
      switchMap((updatedAtelier: Atelier) => {
        return this.http.put<Atelier>(`${urlatelier}/${atelierId}`, updatedAtelier);
      })
    );
  }

  getRequestsForEvent(workshopid: number): Observable<any> {
    return this.http.get<any>(urlatelier+"/"+workshopid).pipe(
      map(data=>data.requests || [])
    )
  }



}