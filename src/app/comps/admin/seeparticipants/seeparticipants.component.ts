import { Component, OnInit } from '@angular/core';
import { Atelier , Request} from 'src/app/classes/atelier';
import { Membre } from 'src/app/classes/membre';
import { AtelierService } from 'src/app/services/atelier.service';
import { MembreService } from 'src/app/services/membre.service';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-seeparticipants',
  templateUrl: './seeparticipants.component.html',
  styleUrls: ['./seeparticipants.component.css']
})
export class SeeparticipantsComponent  implements OnInit{
 
  tabatelier:Atelier[]=[];
  requests:Request[]=[];

  constructor(public requestservice:RequestService,
     public atelierservice:AtelierService, public membreservice:MembreService){}
     ngOnInit(): void {
      this.atelierservice.getatelier().subscribe(
        (data) => {
          this.tabatelier = data;
          this.load();
        }
      );
    }
  
    private load(): void {
      this.tabatelier.forEach((elt, index) => {
        this.requestservice.getRequestsForEvent(elt.id).subscribe(
          (data2) => {
            this.requests = this.requests.concat(data2);
            if (index === this.tabatelier.length - 1) {
              console.log(this.requests);
            }
          }
        );
      });
    }
  }