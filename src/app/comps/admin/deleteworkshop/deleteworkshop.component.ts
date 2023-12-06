import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';
import { Atelier } from 'src/app/classes/atelier';
import { AtelierService } from 'src/app/services/atelier.service';

@Component({
  selector: 'app-deleteworkshop',
  templateUrl: './deleteworkshop.component.html',
  styleUrls: ['./deleteworkshop.component.css']
})
export class DeleteworkshopComponent implements OnInit{
  atelierdeleteform!:FormGroup;
  atelier!:Atelier[];
  constructor(public atelierservice:AtelierService, public fb:FormBuilder){}
  ngOnInit(): void {
    this.atelierdeleteform=this.fb.group({
     select:['',Validators.required]
    })
    this.atelierservice.getatelier().subscribe((data)=>{ 
      this.atelier=data;
    });
  }
 
    
  
  
  delete() {

    const selectedvalue = this.atelierdeleteform.get('select')?.value;
 
    if (selectedvalue) {
      let i: number = 0;
      while (i < this.atelier.length) {
        if (this.atelier[i].id === selectedvalue) {
          this.atelierservice.deleteatelier(this.atelier[i].id).subscribe(
            () => {
              alert('Workshop deleted successfully');
            }
          );
          break;
        } else {
          i++;
        }
      }
      
      if (i === this.atelier.length) {
        console.log('Workshop not found');
      }
    }
  }
  
  
  public get selectwork(){
    return this.atelierdeleteform.get('select');
  }
  selectoblig(){
    return this.selectwork?.errors?.['required'] && this.selectwork?.touched;
  }

  



  

}
