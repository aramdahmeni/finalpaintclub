import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Atelier, Request } from 'src/app/classes/atelier';
import { Membre } from 'src/app/classes/membre';
import { AtelierService } from 'src/app/services/atelier.service';
import { AuthService } from 'src/app/services/auth.service';
import { MembreService } from 'src/app/services/membre.service';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent {
  public user!:string;
  public userid!:number;
  public workshop!:string
  public idworkshop!:number;
  public image!:string;

  public requestform!:FormGroup
  public dirtyform:boolean=false;

  public membres:Membre []=[];
  public nomworkshop!: string;
  
  constructor(public activatedRoute: ActivatedRoute,public router:Router,public atelierservice:AtelierService, 
    public authservice:AuthService, public fb:FormBuilder,
    public membreservice:MembreService, public requestservice:RequestService
    
    ){}
  ngOnInit(): void {
    this.requestform=this.fb.group({
      user:['',Validators.required],
      workshop:['']
    })

    this.idworkshop = +this.activatedRoute.snapshot.params['id'];

    this.atelierservice.getatelierbyid(this.idworkshop).subscribe(
      (atelier)=>{ this.nomworkshop=atelier.nom;
        this.image=atelier.image;
      })
      this.requestform.patchValue({ nomworkshop: this.nomworkshop  });
      this.membreservice.getmembre().subscribe((data) => {
        this.membres = data;
      });
    
      this.requestform.get('user')?.valueChanges.subscribe((username) => {
      const selectedUser = this.membres.find((membre) => membre.username_mb === username);
        if (selectedUser) {
          this.userid = selectedUser.id;
          console.log(this.userid);
        }
        
      });
      
    //validators
    this.requestform.valueChanges.subscribe(()=>
      {this.dirtyform=this.requestform?.dirty ;    })
    }
    public get usermb(){
      return this.requestform.get('user');
    }
    useroblig(){
      return this.usermb?.errors?.['required'] && this.usermb?.touched;
    }
    onsubmit() {

      const username = this.usermb?.value;
      const selectedUser = this.membres.find((membre) => membre.username_mb === username);
  
      if (selectedUser) {
        this.userid = selectedUser.id;
        
        this.requestservice.addRequestsToEvent(this.userid, this.idworkshop, username, this.nomworkshop).subscribe(
          (data) => {
            alert('Request sent');
            this.router.navigate(['/ateliers']);
          },
          (error) => {
            alert('Error adding request');
            console.error('Error adding request:', error);
          }
        );
      } 
      else {
        alert('This user does not exist');
      }
    }
  }
  
