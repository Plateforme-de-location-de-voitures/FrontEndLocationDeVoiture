import { Component } from '@angular/core';
import { ModeleService } from 'src/app/services/modele.service';

@Component({
  selector: 'app-modele',
  templateUrl: './modele.component.html',
  styleUrls: ['./modele.component.css']
})
export class ModeleComponent {

  constructor(_modeleService:ModeleService){

  }
}
