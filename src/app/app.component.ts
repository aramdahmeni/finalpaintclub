import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'paintclub';
  constructor(private router:Router){}
  dash(){
    return this.router.url.includes('dashboard');
  }
}
