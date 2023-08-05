import { Component } from '@angular/core';
import { ImageVoitureService } from 'src/app/services/image-voiture.service';

@Component({
  selector: 'app-image-voiture',
  templateUrl: './image-voiture.component.html',
  styleUrls: ['./image-voiture.component.css']
})
export class ImageVoitureComponent {
  constructor(_imageVoiture:ImageVoitureService){

  }
}
