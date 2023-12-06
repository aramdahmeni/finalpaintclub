import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Atelier } from 'src/app/classes/atelier';
import { AtelierService } from 'src/app/services/atelier.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  public lesateliers: Atelier[]=[];
  searchform!:FormGroup;
  constructor(private atelierservice:AtelierService, public router:Router, public fb:FormBuilder){
   this.atelierservice.getatelier().subscribe(
      (atelier:Atelier[])=>{
        this.lesateliers=atelier;
      }
    )
    
  }
  ngOnInit(): void {
    this.searchform=this.fb.group({
      select:['']
     })
     this.searchform.get('select')?.valueChanges.subscribe((selectedValue:Atelier) => {
     })
  }

  
  ateliercomp(){
      return this.router.url.includes('ateliers') ||this.router.url.includes('changepwd')|| this.router.url.includes('login')|| this.router.url.includes('signin')||this.router.url.includes('request');
    }   
    log(){
      return this.router.url.includes('login')||this.router.url.includes('selectedatelier')||this.router.url.includes('homepage')||this.router.url.includes('aboutus')
      ||this.router.url.includes('signin')||this.router.url.includes('changepwd')||this.router.url.includes('request');
    }
  
  }
