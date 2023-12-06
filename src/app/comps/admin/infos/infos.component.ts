import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Atelier } from 'src/app/classes/atelier';
import { Membre } from 'src/app/classes/membre';
import { AtelierService } from 'src/app/services/atelier.service';
import { MembreService } from 'src/app/services/membre.service';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css']
})
export class InfosComponent implements OnInit {
  atelier!:Atelier[];
  nbatelier:number=0;
  
  public lesateliers: Atelier[]=[];
  searchform!:FormGroup;

  membre!:Membre[];
  nbmembre:number=0;

  constructor(private atelierservice:AtelierService, 
    public membreservice:MembreService,
    public router:Router, public fb:FormBuilder){
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
     this.searchform.get('select')?.valueChanges.subscribe((selectedValue) => {
     })
      //count des atelier
      this.atelierservice.getatelier().subscribe(
        (data:Atelier[])=>{
          this.atelier=data;
          this.nbatelier=this.atelier.length;
        }
      )
      //count members
      this.membreservice.getmembre().subscribe(
        (data:Membre[])=>{
          this.membre=data;
          this.nbmembre=this.membre.length;
        }
      )
  
  
  
  
  
    }

      
}
