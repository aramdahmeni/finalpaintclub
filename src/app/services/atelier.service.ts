import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Atelier } from '../classes/atelier';
import { Observable } from 'rxjs';

const URLsimple='http://localhost:3000/ateliers';

@Injectable({
  providedIn: 'root'
})
export class AtelierService {

  constructor(public http:HttpClient ) { }

  getatelier():Observable<Atelier[]>{
    return this.http.get<Atelier[]>(URLsimple);
  }
  getatelierbyid(idatelier: number): Observable<Atelier> {
    const url =`${URLsimple}/${idatelier}`;
    return this.http.get<Atelier>(url);
  }
  getatelierbynom(nomatelier: string): Observable<Atelier> {
    const url =`${URLsimple}/${nomatelier}`;
    return this.http.get<Atelier>(url);
  }
  

  /*cote admin*/
  addatelier(a:Atelier):Observable<Atelier>{
    return this.http.post<Atelier>(URLsimple,a);
  }

  updateatelier(a:Atelier,id:number):Observable<Atelier>{
    return this.http.patch<Atelier>(`${URLsimple}/${id}`,a);
  }
  deleteatelier(id:number):Observable<any>{
    return this.http.delete(`${URLsimple}/${id}`);
  }

}
