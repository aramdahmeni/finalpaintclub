import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Membre } from 'src/app/classes/membre';
import { MembreService } from 'src/app/services/membre.service';

@Component({
  selector: 'app-deletemember',
  templateUrl: './deletemember.component.html',
  styleUrls: ['./deletemember.component.css']
})
export class DeletememberComponent implements OnInit{
  deleteform!:FormGroup;
  membres!:Membre[];
  constructor(public membreservice:MembreService, public fb:FormBuilder){}
  ngOnInit(): void {
    this.deleteform=this.fb.group({
     select:['',Validators.required]
    })
    this.membreservice.getmembre().subscribe((data)=>{ 
      this.membres=data;
    });
  }
 
    
  
  
  delete() {
    const selectedvalue = this.deleteform.get('select')?.value;
    if (selectedvalue) {
      let i: number = 0;
      while (i < this.membres.length) {
        if (this.membres[i].id === selectedvalue) {
          this.membreservice.suppmembre(this.membres[i].id).subscribe(
            () => {
              alert('Member deleted successfully');
            }
          );
          break;
        } else {
          i++;
        }
      }
      if (i === this.membres.length) {
        console.log('Member not found');
      }
    }
  }
  
  
  public get selectwork(){
    return this.deleteform.get('select');
  }
  selectoblig(){
    return this.selectwork?.errors?.['required'] && this.selectwork?.touched;
  }

  



  

}
