import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Voiture } from 'src/app/models/voiture';
import { VoitureService } from 'src/app/services/voiture.service';

@Component({
  selector: 'app-modifier-voiture',
  templateUrl: './modifier-voiture.component.html',
  styleUrls: ['./modifier-voiture.component.css']
})
export class ModifierVoitureComponent {
  voitureId: any;
  voitureData: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private voitureService: VoitureService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.voitureId = params['id'];
      this.getVoitureDetail();
    });
  }

  getVoitureDetail(): void {
    this.voitureService.getVoitureDetail(this.voitureId).subscribe(
      (data: any) => {
        this.voitureData = data;
      },
      (error: any) => {
        console.error('Failed to retrieve voiture detail:', error);
      }
    );
  }

  modifierVoiture(): void {
    this.voitureService.updateVoiture(this.voitureId, this.voitureData).subscribe(
      () => {
        // Modification réussie, redirigez l'utilisateur vers la page de liste des voitures
        this.router.navigate(['/voitures']);
      },
      (error: any) => {
        console.error('Failed to update voiture:', error);
      }
    );
  }
}
