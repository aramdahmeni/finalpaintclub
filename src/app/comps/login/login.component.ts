import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform!:FormGroup
  constructor(public router:Router, public authservice:AuthService,private fb:FormBuilder){}
  ngOnInit(): void {
    this.loginform=this.fb.group({
      user:['',Validators.required],
      pwd:['',Validators.required]
    })
    
  }

  public get pwdmb(){
    return this.loginform.get('pwd');
  }
  pwdoblig(){
    return this.pwdmb?.errors?.['required'] && this.pwdmb?.touched;
  
  }
  public get usermb(){
    return this.loginform.get('user');
  }
  useroblig(){
    return this.usermb?.errors?.['required'] && this.usermb?.touched;
  }




  login(){
    const user=this.loginform.get('user')?.value;
    const pwd=this.loginform.get('pwd')?.value;
    this.authservice.login(user,pwd);

  }

  onreset(){
    this.loginform.reset({ user:'', pwd: '' } );
    } 
}


