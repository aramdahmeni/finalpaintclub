import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MembreService } from 'src/app/services/membre.service';
import { Router } from '@angular/router';
import { specialite } from 'src/app/categories/specialite';
import { Membre } from 'src/app/classes/membre';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  lespec!:string[];
  membres:Membre[]=[];
  
  signinform!:FormGroup
  
  constructor(private router:Router/*, public authservice:AuthService,*/,private fb:FormBuilder, private membreservice:MembreService){}
  ngOnInit(): void {
    this.lespec = Object.values(specialite).map(String);

    
   this.signinform=this.fb.group({

      nom:['', [Validators.required,Validators.minLength(3),Validators.pattern('^[A-Z][a-zA-Z]*( [A-Z][a-zA-Z]*)*$')]],
      numtel:[,[Validators.required,Validators.pattern('[1-9][0-9]{7}$')]],
      specialite:[specialite.TI],
      username_mb:['', [Validators.required, Validators.minLength(2),Validators.pattern('^[a-zA-Z0-9]+$')]],
      password_mb:['',[ Validators.required, Validators.minLength(4),Validators.pattern('^[a-zA-Z0-9]+$')]],
 
    })
  }
  //validation nom
      public get nommb(){
        return this.signinform.get('nom');
      }
      valid(){
        return  this.nommb?.errors?.['pattern'] && this.nommb?.errors?.['minlength'] &&this.nommb?.dirty;
      }
      nomoblig(){
        return this.nommb?.errors?.['required'] && this.nommb?.touched;
      }



  public get numtelmb(){
    return this.signinform.get('numtel');
  }
  validnum() {
    return this.numtelmb?.hasError('pattern') && this.numtelmb?.touched;
  }
  
  numoblig() {
    return this.numtelmb?.hasError('required') && this.numtelmb?.dirty;
  }
  


  public get usermb(){
    return this.signinform.get('username_mb');
  }
  useroblig(){
    return this.usermb?.errors?.['required'] && this.usermb?.touched;
  }
  uservalid(){
    return this.usermb?.errors?.['minlength'] &&this.usermb?.errors?.['pattern'] && this.usermb?.touched;
  }


  public get pwdmb(){
    return this.signinform.get('password_mb');
  }
  pwdoblig(){
    return this.pwdmb?.errors?.['required'] && this.pwdmb?.touched;
  
  }
  pwdvalid(){
    return this.pwdmb?.errors?.['minlength'] &&this.pwdmb?.errors?.['pattern'] && this.pwdmb?.touched;
  }
 
  




  onreset() {
    this.signinform.reset({
      nom: 'nom',
      numtel: 0,
      specialite: specialite.TI,
      username_mb: 'username',
      password_mb: 'password'
    });
  }
      
    
  onSubmit(){
        if(this.signinform.valid){
          let i:number=0;
          this.membreservice.getmembre().subscribe(
            (data)=>{this.membres=data;}
          )
          while(i<this.membres.length){
            if(this.membres[i].username_mb===this.signinform.get("username_mb")?.value){
              alert("this user already exists");
            }
            else{
              i++;
            }
          }
          if(i===this.membres.length){
            const values=this.signinform.value;
          this.membreservice.addmembre(values).subscribe(
            data =>console.log(data)
          )
          alert("welcome! you can log in now");
          this.router.navigate(['/login']);
          }
      }

  }
}