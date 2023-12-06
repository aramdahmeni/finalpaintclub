import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.css']
})
export class LoginadminComponent {
  loginform!:FormGroup
  constructor(public router:Router, public authservice:AuthService,private fb:FormBuilder){}
  ngOnInit(): void {
    this.loginform=this.fb.group({
      user:['',Validators.required],
      pwd:['',Validators.required]
    })
    
  }


  login(){
    const user=this.loginform.get('user')?.value;
    const pwd=this.loginform.get('pwd')?.value;
    this.authservice.adminlogin(user,pwd);

  }

  onreset(){
    this.loginform.reset({ user:'', pwd: '' } );
    } 
}


