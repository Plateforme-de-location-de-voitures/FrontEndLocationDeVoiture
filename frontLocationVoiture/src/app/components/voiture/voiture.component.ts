import { Component } from '@angular/core';
import { VoitureService } from 'src/app/services/voiture.service';

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.css']
})
export class VoitureComponent {

  constructor(_voitureService:VoitureService){

  }
}
