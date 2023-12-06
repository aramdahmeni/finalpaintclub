import { Injectable } from '@angular/core';
import { Membre } from '../classes/membre';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap, throwError } from 'rxjs';


const URL='http://localhost:3500/membres';
@Injectable({
  providedIn: 'root'
})
export class MembreService {
  constructor(private http:HttpClient ) { }

  getmembre():Observable<Membre[]>{
    return this.http.get<Membre[]>(URL);
  }
  getmembrebyid(id: number): Observable<Membre> {
    const url = `${URL}?id=${id}`;
    return this.http.get<Membre>(url);
  }
  getmembrebyusername(membreuser: string): Observable<Membre> {
  const url = `${URL}?username_mb=${membreuser}`;
  return this.http.get<Membre>(url);
  }


  
  changerMdp(id: number, nvmdp: string): Observable<any> {
    return this.http.patch<void>(`${URL}/${id}`, {password_mb: nvmdp });
  }
  


  addmembre(m:Membre):Observable<Membre>{
    return this.http.post<Membre>(URL,m);
  }
  suppmembre(id:number):Observable<any>{   
    return this.http.delete(`${URL}/${id}`);
    }

    
  

}
