import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Voiture } from 'src/app/models/voiture';
import { VoitureService } from 'src/app/services/voiture.service';

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.css']
})
export class VoitureComponent {
  voitures: Voiture[] = [];

  constructor(private voitureService: VoitureService, private router: Router) { }

  ngOnInit(): void {
    this.getVoituresList();
  }

  getVoituresList(): void {
    this.voitureService.getVoituresList().subscribe(
      voitures => {
        this.voitures = voitures;
      },
      error => {
        console.error(error);
      }
    );
  }

  modifierVoiture(voiture: Voiture): void {
    this.router.navigate(['/modifier-voiture', voiture.id]);
  }

  deleteVoiture(voitureId: number): void {
    this.voitureService.deleteVoiture(voitureId).subscribe(
      response => {
        // Suppression réussie, mettre à jour la liste des voitures
        this.getVoituresList();
      },
      error => {
        console.error(error);
      }
    );
  }
}
