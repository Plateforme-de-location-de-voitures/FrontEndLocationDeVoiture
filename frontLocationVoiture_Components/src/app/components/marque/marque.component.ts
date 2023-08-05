import { Component } from '@angular/core';
import { MarqueService } from 'src/app/services/marque.service';

@Component({
  selector: 'app-marque',
  templateUrl: './marque.component.html',
  styleUrls: ['./marque.component.css']
})
export class MarqueComponent {

  constructor(_marqueService:MarqueService){

  }
}
