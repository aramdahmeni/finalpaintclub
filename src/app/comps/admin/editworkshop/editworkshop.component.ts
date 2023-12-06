import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Atelier } from 'src/app/classes/atelier';
import { AtelierService } from 'src/app/services/atelier.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-editworkshop',
  templateUrl: './editworkshop.component.html',
  styleUrls: ['./editworkshop.component.css']
})
export class EditworkshopComponent implements OnInit {
  public idatelier!:number;
  public description!:string;
  public date!:Date;
  public lieu!:string;
  public nom!:string
  public image!:string
  public done!:boolean;


  public editform!:FormGroup
  public dirtyform:boolean=false;
  
  constructor(public activatedRoute: ActivatedRoute,public router:Router,public atelierservice:AtelierService, public authservice:AuthService, public fb:FormBuilder){}
  ngOnInit(): void {
    this.editform = this.fb.group({
      description: [''],
      date: [''],
      lieu: [''],
      image: [''],
      nom: ['']
    });
    

    this.idatelier=this.activatedRoute.snapshot.params['id'];  
    
    this.atelierservice.getatelierbyid(this.idatelier).subscribe(
      (atelier)=>{

        this.description=atelier.description;
        this.date=atelier.date;
        this.lieu=atelier.lieu;
        this.nom=atelier.nom;
        this.image=atelier.image;
        this.done=atelier.done;
    
        this.editform.patchValue({
          description: this.description,
          date: this.date,
          lieu: this.lieu,
          nom: this.nom,
          image:this.image,
          done:this.done
        });
      },
      (error) => {
        console.error('Error fetching atelier:', error);
      }
    );
    this.editform.valueChanges.subscribe(()=>
      {this.dirtyform=this.editform?.dirty ;
      })
    }
    edit() {
      const values = this.editform?.value;
      let updated: Atelier = new Atelier(values.id, values.nom, values.description, values.date, values.image, values.lieu, values.done);
    
      this.atelierservice.updateatelier(updated, this.idatelier).subscribe(
        (updatedAtelier) => {
          alert('Workshop updated successfully');
        },
        (error) => {
          console.error('Error updating workshop:', error);
        }
      );
    }

}
