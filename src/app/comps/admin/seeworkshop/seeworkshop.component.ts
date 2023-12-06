import { Component } from '@angular/core';
import { Atelier } from 'src/app/classes/atelier';
import { AtelierService } from 'src/app/services/atelier.service';

@Component({
  selector: 'app-seeworkshop',
  templateUrl: './seeworkshop.component.html',
  styleUrls: ['./seeworkshop.component.css']
})
export class SeeworkshopComponent {

  public lesateliers: Atelier[] = [];

  constructor(private atelierservice: AtelierService) {
    this.atelierservice.getatelier().subscribe(
      (atelier: Atelier[]) => {
        this.lesateliers = atelier;
        this.lesateliers.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      }
    );
  }
  
  outcome(dateat: Date) {
    let mydate = new Date();
    let thedate = new Date(dateat);
    
    if (thedate < mydate) {
      return 'red';
    } else {
      return 'green';
    }
  }
  

}

