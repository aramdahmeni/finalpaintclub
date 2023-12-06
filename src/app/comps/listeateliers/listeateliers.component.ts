import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';
import { TimeserviceService } from 'src/app/services/timeservice.service';

@Component({
  selector: 'app-listeateliers',
  templateUrl: './listeateliers.component.html',
  styleUrls: ['./listeateliers.component.css']
})
export class ListeateliersComponent implements OnInit {
  day!:string;
 constructor(private authservice:AuthService,public timeserivce:TimeserviceService){}
 time:any;
 
  ngOnInit(): void {
    this.timeserivce.gettime().subscribe((data)=>{
      console.log(data);
      this.time=data['datetime'];
    })
  }
 logout(){
  this.authservice.logout();
  
}


}
