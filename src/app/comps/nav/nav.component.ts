import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor(private router:Router, public authservice:AuthService){}
  out(){
    this.authservice.logout();
    this.router.navigate(['/login'])
  }
}
