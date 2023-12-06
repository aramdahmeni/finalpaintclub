import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Membre } from 'src/app/classes/membre';
import { AuthService } from 'src/app/services/auth.service';
import { MembreService } from 'src/app/services/membre.service';

@Component({
  selector: 'app-changepwd',
  templateUrl: './changepwd.component.html',
  styleUrls: ['./changepwd.component.css']
})
export class ChangepwdComponent {
  changeform!:FormGroup;
  member!:Membre[];
  constructor(public router:Router, public authservice:AuthService,private fb:FormBuilder, public membreservice:MembreService){}
  ngOnInit(): void {
    this.changeform=this.fb.group({
      user:['', [Validators.required, Validators.minLength(2),Validators.pattern('^[a-zA-Z0-9]+$')]],
      pwd:['', [Validators.required, Validators.minLength(2),Validators.pattern('^[a-zA-Z0-9]+$')]],
      confirm:['', Validators.required]
    })
    
    
  }

  change(user: string, pwd: string) {
    this.membreservice.getmembre().subscribe(
      (data) => {
        this.member = data;

        const foundMember = this.member.find((m) => m.username_mb === user);
  
        if (foundMember) {
          const membreid=foundMember.id
          this.membreservice.changerMdp(membreid, pwd).subscribe(
            () => {
              alert('Password changed successfully');
              this.router.navigate(['/login'])
            },
            (error) => {
              console.error('Error changing password:', error);
              alert('Password change failed. Please try again.');
            }
          );
        } else {
          alert('Member not found');
        }
      },
      (error) => {
        console.error('Error fetching members:', error);
      }
    );
  }
  
  


//validators

public get pwdmb(){
  return this.changeform.get('pwd');
}
pwdoblig(){
  return this.pwdmb?.errors?.['required'] && this.pwdmb?.touched;
}
pwdvalid(){
  return this.pwdmb?.errors?.['minlength'] &&this.pwdmb?.errors?.['pattern'] && this.pwdmb?.touched;
}



public get usermb(){
  return this.changeform.get('user');
} 
useroblig(){
  return this.usermb?.errors?.['required'] && this.usermb?.touched;
}
uservalid(){
  return this.usermb?.errors?.['minlength'] &&this.usermb?.errors?.['pattern'] && this.usermb?.touched;
}

public get conf(){return this.changeform.get("confirm");}
confoblig(){
  return this.conf?.errors?.['required'] && this.conf?.touched;
}
confvalid(){
  return (this.conf?.value != this.pwdmb?.value) && this.conf?.touched;
}







}

  
  
  
  


