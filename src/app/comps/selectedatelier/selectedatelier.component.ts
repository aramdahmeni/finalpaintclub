import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AtelierService } from 'src/app/services/atelier.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-selectedatelier',
  templateUrl: './selectedatelier.component.html',
  styleUrls: ['./selectedatelier.component.css']
})
export class SelectedatelierComponent implements OnInit{
  public idatelier!:number;
  public nom!:string;
  public description!:string;
  public image!:string;
  public done:boolean=true;
  public date!:Date;
  public lieu!:string;


  constructor(public activatedRoute: ActivatedRoute,public router:Router,public atelierservice:AtelierService, public authservice:AuthService){}
  ngOnInit(): void {
    this.idatelier=this.activatedRoute.snapshot.params['id'];  
    this.atelierservice.getatelierbyid(this.idatelier).subscribe(
      (atelier)=>{
        this.date=atelier.date;
        this.description=atelier.description;
        this.done=atelier.done;
        this.image=atelier.image;
        this.lieu=atelier.lieu;
        this.nom=atelier.nom;

      },

      (error) => {
        console.error('Error fetching atelier:', error);
      }
    );
   }
   redirectToRequest() {
    this.router.navigate([`/request/${this.idatelier}`]);
  }
  
}
