import { Injectable } from '@angular/core';
import { MembreService } from './membre.service';
import { Membre } from '../classes/membre';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  membres!: Membre[];


  constructor(private membreservice:MembreService ,private router:Router) { }
  private authenticated=false;
  private userid!:number;


public login(user:string, mdp:string){
   let i:number=0;
  this.membreservice.getmembre().subscribe(data => {
    this.membres = data;
    
    while(i<this.membres.length && this.membres[i].username_mb != user){
      i++;
    }
    if(i==this.membres.length){
      alert("user doesnt exist");
      this.router.navigate(["/signin"]);
    }
    else if(this.membres[i].username_mb == user && this.membres[i].password_mb == mdp){
            this.userid=this.membres[i].id;
      this.authenticated=true;
        this.router.navigate(["/ateliers"]);
      }
      else{
        alert("invalid password");
      }
    })


  }
  

  public adminlogin(user:string, mdp:string){
    if(user=="admin" && mdp=="paintclub"){
      this.authenticated=true;
      this.router.navigate(["/dashboard"]);
      alert("welcome admin");
    }
    else{
      alert("login invalid")
    }
  }



  public logout(){
    this.router.navigate(['/homepage']);
    this.authenticated=false;
    
   
  }
  public isauthenticated(){
    return this.authenticated
  }
  public authtrue(){
    return this.authenticated=true;
  }
}

