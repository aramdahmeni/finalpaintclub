import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Atelier } from 'src/app/classes/atelier';
import { AtelierService } from 'src/app/services/atelier.service';


@Component({
  selector: 'app-addworkshop',
  templateUrl: './addworkshop.component.html',
  styleUrls: ['./addworkshop.component.css']
})
export class AddworkshopComponent {
  addform!:FormGroup
constructor(public atelierservice:AtelierService, public fb:FormBuilder){}
  ngOnInit(): void {
    this.addform=this.fb.group({
      nom:["",Validators.required],
      description:["",Validators.required],
      date:["",Validators.required],
      lieu:["",Validators.required],
      image:["",Validators.required],
    })
  }
  public get name(){return this.addform.get('nom');}
  nameoblig(){return this.name?.errors?.['required'] && this.name?.touched;}

  public get descri(){return this.addform.get('description');}
  descriptionoblig(){return this.descri?.errors?.['required'] && this.descri?.touched;}

  public get date(){return this.addform.get('date');}
  dateoblig(){return this.date?.errors?.['required'] && this.date?.touched;}

  public get lieu(){return this.addform.get('lieu');}
  lieuoblig(){return this.lieu?.errors?.['required'] && this.lieu?.touched;}

  public get image(){return this.addform.get('image');}
  imageoblig(){return this.image?.errors?.['required'] && this.image?.touched;}

  onsubmit(){
    if(this.addform.valid){
      const formvalues=this.addform.value;
      const ateliervalue=new Atelier(
        Atelier.nextId++,
        formvalues.nom,
        formvalues.description,
        formvalues.date,
        formvalues.image,
        formvalues.lieu,
        Atelier.notdone
      );

    this.atelierservice.addatelier(ateliervalue).subscribe(
      data =>console.log(data)    
    )  
    }

}
}
