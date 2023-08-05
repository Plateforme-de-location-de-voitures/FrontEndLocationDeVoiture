import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontLocationVoiture';

  auth = 1;

  onListe(){
    this.auth=1;
  }
  onForm(){
    this.auth=2;
  }
  onReservation(){
    this.auth=3;
  }
  onReservationAjout(){
    this.auth=4;
  }
}
